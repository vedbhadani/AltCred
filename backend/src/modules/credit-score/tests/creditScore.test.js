const { test, describe, it } = require('node:test');
const assert = require('node:assert');
const {
    calculateComponentScores,
    calculateFinalScore,
    getScoreCategory
} = require('../services/mlModel.service');
const { SCORE_CATEGORIES } = require('../../../config/constants');

describe('Credit Score Logic', () => {

    it('should calculate component scores correctly', () => {
        const features = {
            pastLoanExperience: 1,
            digitalBehavior: 1,
            savingsBuffer: 1,
            expenseRatio: 1,
            employmentStability: 1,
            monthlyIncome: 1,
            incomeStability: 1,
            dependents: 1,
            educationLevel: 1,
            financialDiscipline: 1
        };

        const components = calculateComponentScores(features);

        assert.strictEqual(components.paymentHistory, 1);
        assert.strictEqual(components.financialStability, 1);
        assert.strictEqual(components.incomeFactors, 1);
        assert.strictEqual(components.responsibility, 1);
    });

    it('should calculate max score correctly', () => {
        const components = {
            paymentHistory: 1,
            financialStability: 1,
            incomeFactors: 1,
            responsibility: 1
        };

        const score = calculateFinalScore(components);
        assert.strictEqual(score, 850);
    });

    it('should calculate min score correctly', () => {
        const components = {
            paymentHistory: 0,
            financialStability: 0,
            incomeFactors: 0,
            responsibility: 0
        };

        const score = calculateFinalScore(components);
        assert.strictEqual(score, 300);
    });

    it('should categorize scores correctly', () => {
        assert.strictEqual(getScoreCategory(800), SCORE_CATEGORIES.EXCELLENT);
        assert.strictEqual(getScoreCategory(700), SCORE_CATEGORIES.GOOD);
        assert.strictEqual(getScoreCategory(600), SCORE_CATEGORIES.FAIR);
        assert.strictEqual(getScoreCategory(500), SCORE_CATEGORIES.POOR);
        assert.strictEqual(getScoreCategory(300), SCORE_CATEGORIES.VERY_POOR);
    });
});
