#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon'
};

const PORT = process.env.PORT || 8000;

function findAvailablePort(startPort, callback) {
  const server = http.createServer();
  server.listen(startPort, () => {
    const port = server.address().port;
    server.close(() => callback(port));
  });
  server.on('error', () => {
    findAvailablePort(startPort + 1, callback);
  });
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    const mimeType = getMimeType(filePath);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Security: prevent directory traversal
  filePath = path.normalize(path.join(__dirname, filePath));
  
  const ext = path.extname(filePath);
  
  if (ext === '') {
    filePath += '.html';
  }
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
    } else {
      serveFile(filePath, res);
    }
  });
});

findAvailablePort(PORT, (port) => {
  server.listen(port, () => {
    console.log(`🚀 AltCred server running at http://localhost:${port}`);
    console.log(`📂 Serving files from: ${__dirname}`);
    console.log(`\n✨ Open http://localhost:${port} in your browser\n`);
    
    // Try to open browser (works on macOS)
    if (process.platform === 'darwin') {
      require('child_process').exec(`open http://localhost:${port}`);
    }
  });
});

