/**
 * Credit Score Constants
 */

const SCORE_CATEGORIES = {
    EXCELLENT: 'Excellent',
    GOOD: 'Good',
    FAIR: 'Fair',
    POOR: 'Poor',
    VERY_POOR: 'Very Poor'
};

const SCORE_THRESHOLDS = {
    EXCELLENT: 750,
    GOOD: 650,
    FAIR: 550,
    POOR: 450
};

const COMPONENT_WEIGHTS = {
    PAYMENT_HISTORY: 0.35,
    FINANCIAL_STABILITY: 0.25,
    INCOME_FACTORS: 0.20,
    RESPONSIBILITY: 0.20
};

module.exports = {
    SCORE_CATEGORIES,
    SCORE_THRESHOLDS,
    COMPONENT_WEIGHTS
};
