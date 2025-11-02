const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { SCORE_RANGE } = require('../constants/scoring');

class CreditScore {
  static async createScore(userId, scoreData) {
    const {
      paymentHistory,
      creditUtilization,
      creditAge,
      creditMix,
      newCredit,
      additionalFactors = {}
    } = scoreData;

    const score = await this.calculateScore(scoreData);

    return prisma.creditScore.create({
      data: {
        userId,
        score,
        factors: {
          paymentHistory,
          creditUtilization,
          creditAge,
          creditMix,
          newCredit,
          additionalFactors
        },
      },
    });
  }

  static async getScoresByUser(userId, limit = 10) {
    return prisma.creditScore.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  static async getLatestScore(userId) {
    return prisma.creditScore.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async calculateScore({
    paymentHistory,
    creditUtilization,
    creditAge,
    creditMix,
    newCredit,
    additionalFactors = {}
  }) {
    // Calculate base score components
    const paymentScore = this.calculatePaymentHistoryScore(paymentHistory);
    const utilizationScore = this.calculateUtilizationScore(creditUtilization);
    const ageScore = this.calculateAgeScore(creditAge);
    const mixScore = this.calculateMixScore(creditMix);
    const newCreditScore = this.calculateNewCreditScore(newCredit);
    
    // Apply weights
    let score = (
      paymentScore * 0.35 +
      utilizationScore * 0.30 +
      ageScore * 0.15 +
      mixScore * 0.10 +
      newCreditScore * 0.10
    );

    // Apply additional factors
    score = this.applyAdditionalFactors(score, additionalFactors);

    // Ensure score is within bounds
    return Math.max(SCORE_RANGE.MIN, Math.min(SCORE_RANGE.MAX, Math.round(score)));
  }

  static calculatePaymentHistoryScore(paymentHistory) {
    // Implementation based on payment history
    return 700; // Placeholder
  }

  static calculateUtilizationScore(utilization) {
    // Implementation based on credit utilization
    return 700; // Placeholder
  }

  static calculateAgeScore(ageData) {
    // Implementation based on credit age
    return 700; // Placeholder
  }

  static calculateMixScore(mixData) {
    // Implementation based on credit mix
    return 700; // Placeholder
  }

  static calculateNewCreditScore(newCreditData) {
    // Implementation based on new credit
    return 700; // Placeholder
  }

  static applyAdditionalFactors(score, factors) {
    // Apply adjustments based on additional factors
    return score; // Placeholder
  }

  static getScoreCategory(score) {
    if (score >= SCORE_RANGE.EXCELLENT) return 'EXCELLENT';
    if (score >= SCORE_RANGE.GOOD) return 'GOOD';
    if (score >= SCORE_RANGE.FAIR) return 'FAIR';
    if (score >= SCORE_RANGE.POOR) return 'POOR';
    return 'VERY_POOR';
  }
}

module.exports = CreditScore;
