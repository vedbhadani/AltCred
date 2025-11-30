/**
 * ML Model Service
 * Calculates credit score using weighted algorithm
 */

/**
 * Calculate component scores from features
 * @param {Object} features - Engineered features (0-1 scale)
 * @returns {Object} Component scores
 */
function calculateComponentScores(features) {
    // Payment History Component (35%)
    // Based on: pastLoanExperience, digitalBehavior
    const paymentHistory = (
        features.pastLoanExperience * 0.6 +
        features.digitalBehavior * 0.4
    );

    // Financial Stability Component (25%)
    // Based on: savingsBuffer, expenseRatio
    const financialStability = (
        features.savingsBuffer * 0.6 +
        features.expenseRatio * 0.4
    );

    // Income Factors Component (20%)
    // Based on: employmentStability, monthlyIncome, incomeStability
    const incomeFactors = (
        features.employmentStability * 0.4 +
        features.monthlyIncome * 0.3 +
        features.incomeStability * 0.3
    );

    // Responsibility Component (20%)
    // Based on: dependents, educationLevel, financialDiscipline
    const responsibility = (
        features.dependents * 0.3 +
        features.educationLevel * 0.3 +
        features.financialDiscipline * 0.4
    );

    return {
        paymentHistory,
        financialStability,
        incomeFactors,
        responsibility,
    };
}

/**
 * Calculate final credit score
 * @param {Object} components - Component scores (0-1 scale)
 * @returns {number} Credit score (300-850)
 */
function calculateFinalScore(components) {
    // Weighted sum of components
    const rawScore = (
        components.paymentHistory * 0.35 +
        components.financialStability * 0.25 +
        components.incomeFactors * 0.20 +
        components.responsibility * 0.20
    );

    // Map to 300-850 range
    const finalScore = Math.round(300 + (rawScore * 550));

    // Ensure within bounds
    return Math.max(300, Math.min(850, finalScore));
}

/**
 * Generate factor breakdown
 * @param {Object} components - Component scores (0-1 scale)
 * @param {number} finalScore - Final credit score
 * @returns {Object} Detailed factor breakdown
 */
function generateFactorBreakdown(components, finalScore) {
    const weights = {
        paymentHistory: 35,
        financialStability: 25,
        incomeFactors: 20,
        responsibility: 20,
    };

    const breakdown = {};

    for (const [key, value] of Object.entries(components)) {
        const componentScore = Math.round(value * 100);
        const weight = weights[key];
        const contribution = (value * weight);

        breakdown[key] = {
            score: componentScore,
            weight: weight,
            contribution: Math.round(contribution * 10) / 10,
        };
    }

    return breakdown;
}

/**
 * Calculate confidence score based on data quality
 * @param {Object} features - Engineered features
 * @returns {number} Confidence (0-1)
 */
function calculateConfidence(features) {
    // Higher confidence if user has loan history
    const hasLoanHistory = features.pastLoanExperience > 0.5;

    // Higher confidence if income is stable
    const hasStableIncome = features.incomeStability > 0.6;

    // Higher confidence if has savings
    const hasSavings = features.savingsBuffer > 0.25;

    let confidence = 0.7; // Base confidence

    if (hasLoanHistory) confidence += 0.1;
    if (hasStableIncome) confidence += 0.1;
    if (hasSavings) confidence += 0.1;

    return Math.min(1.0, confidence);
}

/**
 * Main function to calculate credit score
 * @param {Object} features - Engineered features from featureEngineering service
 * @returns {Object} Score result with breakdown
 */
function calculateCreditScore(features) {
    // Calculate component scores
    const components = calculateComponentScores(features);

    // Calculate final score
    const finalScore = calculateFinalScore(components);

    // Generate factor breakdown
    const factors = generateFactorBreakdown(components, finalScore);

    // Calculate confidence
    const confidence = calculateConfidence(features);

    // Get score category
    const category = getScoreCategory(finalScore);

    return {
        score: finalScore,
        factors,
        confidence,
        category,
        rawFeatures: features,
    };
}

/**
 * Get score category
 */
function getScoreCategory(score) {
    if (score >= 750) return 'Excellent';
    if (score >= 650) return 'Good';
    if (score >= 550) return 'Fair';
    if (score >= 450) return 'Poor';
    return 'Very Poor';
}

module.exports = {
    calculateCreditScore,
    calculateComponentScores,
    calculateFinalScore,
    generateFactorBreakdown,
    calculateConfidence,
    getScoreCategory,
};
