/**
 * Credit Score Service
 * Main orchestration service for credit score calculation
 */

const { supabase } = require('../../../config/supabase');
const { engineerFeatures } = require('./featureEngineering.service');
const { calculateCreditScore } = require('./mlModel.service');

/**
 * Fetch user's latest answers from database
 * @param {string} userId - User ID
 * @returns {Object} User answers
 */
async function fetchUserAnswers(userId) {
    const { data, error } = await supabase
        .from('user_answers')
        .select('answers')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        throw new Error(`Failed to fetch user answers: ${error.message}`);
    }

    if (!data) {
        throw new Error('No answers found for user');
    }

    return data.answers;
}

/**
 * Save credit score to database
 * @param {string} userId - User ID
 * @param {Object} scoreData - Score calculation result
 * @returns {Object} Saved score record
 */
async function saveCreditScore(userId, scoreData) {
    const { data, error } = await supabase
        .from('credit_scores')
        .insert({
            user_id: userId,
            score: scoreData.score,
            factors: scoreData.factors,
            confidence: scoreData.confidence,
            calculated_at: new Date().toISOString(),
        })
        .select()
        .single();

    if (error) {
        throw new Error(`Failed to save credit score: ${error.message}`);
    }

    return data;
}

/**
 * Calculate credit score for a user
 * @param {string} userId - User ID
 * @returns {Object} Credit score result
 */
async function calculateUserCreditScore(userId) {
    try {
        // 1. Fetch user's latest answers
        const answers = await fetchUserAnswers(userId);

        // 2. Engineer features from answers
        const features = engineerFeatures(answers);

        // 3. Calculate credit score
        const scoreResult = calculateCreditScore(features);

        // 4. Save to database
        const savedScore = await saveCreditScore(userId, scoreResult);

        // 5. Return complete result
        return {
            ...scoreResult,
            id: savedScore.id,
            calculatedAt: savedScore.calculated_at,
        };
    } catch (error) {
        console.error('Error calculating credit score:', error);
        throw error;
    }
}

/**
 * Get user's latest credit score
 * @param {string} userId - User ID
 * @returns {Object} Latest credit score
 */
async function getLatestCreditScore(userId) {
    const { data, error } = await supabase
        .from('credit_scores')
        .select('*')
        .eq('user_id', userId)
        .order('calculated_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            return null; // No score found
        }
        throw new Error(`Failed to fetch credit score: ${error.message}`);
    }

    return data;
}

/**
 * Get user's credit score history
 * @param {string} userId - User ID
 * @param {number} limit - Number of records to fetch
 * @returns {Array} Credit score history
 */
async function getCreditScoreHistory(userId, limit = 10) {
    const { data, error } = await supabase
        .from('credit_scores')
        .select('*')
        .eq('user_id', userId)
        .order('calculated_at', { ascending: false })
        .limit(limit);

    if (error) {
        throw new Error(`Failed to fetch credit score history: ${error.message}`);
    }

    return data || [];
}

module.exports = {
    calculateUserCreditScore,
    getLatestCreditScore,
    getCreditScoreHistory,
    fetchUserAnswers,
    saveCreditScore,
};
