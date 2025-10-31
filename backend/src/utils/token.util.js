const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const SECRET = process.env.JWT_SECRET;
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
