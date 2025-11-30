/**
 * Credit Score Routes
 */

const express = require('express');
const router = express.Router();
const { authGaurd } = require('../../auth/middlewares/auth.guard');
const {
    calculateScore,
    getScore,
    getScoreHistory,
} = require('../controllers/creditScore.controller');

// All routes require authentication
router.post('/calculate', authGaurd, calculateScore);
router.get('/', authGaurd, getScore);
router.get('/history', authGaurd, getScoreHistory);

module.exports = router;
