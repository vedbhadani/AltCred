const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const cors = require('cors');

dotenv.config();

const app = express();

// Body parsing with size limit
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Global validation middleware
app.use((req, res, next) => {
  // Log requests for debugging
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send(' API is running...');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
