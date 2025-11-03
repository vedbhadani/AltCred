/**
 * Credit Scoring Parameters and Configuration
 * This file contains all the constants and weights used in the credit scoring algorithm
 */

module.exports = {
  // Base score range
  SCORE_RANGE: {
    MIN: 300,
    MAX: 900,
    EXCELLENT: 750,
    GOOD: 700,
    FAIR: 650,
    POOR: 600,
    VERY_POOR: 300
  },

  // Weightage for different factors (should add up to 1.0)
  WEIGHTS: {
    PAYMENT_HISTORY: 0.35,      // Most important factor
    CREDIT_UTILIZATION: 0.30,   // Second most important
    CREDIT_AGE: 0.15,           // Length of credit history
    CREDIT_MIX: 0.10,           // Types of credit accounts
    NEW_CREDIT: 0.10            // Recent credit inquiries
  },

  // Payment history scoring
  PAYMENT_HISTORY: {
    ON_TIME_PAYMENTS: {
      WEIGHT: 0.40,
      MAX_POINTS: 100
    },
    LATE_PAYMENTS: {
      WEIGHT: -0.30,
      PER_30_DAYS: -10,
      PER_60_DAYS: -20,
      PER_90_DAYS: -30,
      PER_120_DAYS: -50,
      MAX_DEDUCTION: -100
    },
    COLLECTIONS: {
      WEIGHT: -0.20,
      PER_COLLECTION: -30,
      MAX_DEDUCTION: -100
    },
    BANKRUPTCY: {
      WEIGHT: -0.10,
      DEDUCTION: -50,
      DURATION_YEARS: 10  // Impact duration in years
    }
  },

  // Credit utilization scoring
  CREDIT_UTILIZATION: {
    IDEAL_RATIO: 0.30,  // 30% utilization is ideal
    MAX_RATIO: 0.90,    // 90% is the maximum before severe penalties
    WEIGHT_PER_POINT: 2.5,
    MAX_POINTS: 100
  },

  // Credit age scoring
  CREDIT_AGE: {
    AVERAGE_AGE_WEIGHT: 0.7,
    OLDEST_ACCOUNT_WEIGHT: 0.3,
    MAX_AGE_MONTHS: 240,  // 20 years
    POINTS_PER_MONTH: 0.5,
    MAX_POINTS: 100
  },

  // Credit mix scoring
  CREDIT_MIX: {
    TYPES: {
      MORTGAGE: 20,
      AUTO_LOAN: 15,
      CREDIT_CARD: 15,
      INSTALLMENT_LOAN: 10,
      RETAIL_ACCOUNT: 10,
      OTHER: 5
    },
    MAX_POINTS: 100,
    MIN_ACCOUNTS_FOR_DIVERSITY: 3
  },

  // New credit scoring
  NEW_CREDIT: {
    HARD_INQUIRY_DEDUCTION: -5,
    MAX_INQUIRY_DEDUCTION: -30,
    NEW_ACCOUNT_PENALTY: -10,
    NEW_ACCOUNT_GRACE_PERIOD_DAYS: 30,  // No penalty for new accounts after this period
    MAX_POINTS: 100
  },

  // Additional factors
  ADDITIONAL_FACTORS: {
    INCOME_VERIFICATION: 10,      // Points for verified income
    EMPLOYMENT_STABILITY: 15,     // Points for stable employment
    DEBT_TO_INCOME_RATIO: {
      IDEAL: 0.35,               // 35% or lower is ideal
      MAX: 0.50,                 // 50% is the maximum allowed
      WEIGHT: -20                // Points deducted for high ratio
    },
    SAVINGS_ACCOUNT: 5,          // Points for having a savings account
    CHECKING_ACCOUNT: 3          // Points for having a checking account
  },

  // Score adjustments
  ADJUSTMENTS: {
    RECENT_APPLICATIONS: {
      WINDOW_DAYS: 30,           // 30-day window for rate shopping
      MAX_APPLICATIONS: 3,       // Max applications before penalty
      DEDUCTION_PER_APP: -2      // Points deducted per application over max
    },
    CREDIT_LIMIT_INCREASE: 5,    // Points for credit limit increase without hard pull
    ACCOUNT_CLOSURE_PENALTY: -10 // Points for closing oldest account
  },

  // Time-based decay factors (per month)
  DECAY: {
    LATE_PAYMENT: 0.1,           // 10% improvement per month of on-time payments
    HARD_INQUIRY: 0.5,           // 50% reduction in impact after 2 months
    BANKRUPTCY: 0.05,            // 5% reduction in impact per year
    COLLECTIONS: 0.08            // 8% reduction in impact per year
  },

  // Minimum data requirements for score calculation
  MINIMUM_REQUIREMENTS: {
    MIN_ACCOUNTS: 1,             // At least one credit account
    MIN_ACCOUNT_AGE_DAYS: 90,    // At least 90 days of credit history
    MIN_TRANSACTIONS: 3          // At least 3 transactions
  }
};