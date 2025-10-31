const express = require('express');
const authRoutes = require('./auth.routes');
const creditRoutes = require('./credit.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/credit', creditRoutes);

module.exports = router;
