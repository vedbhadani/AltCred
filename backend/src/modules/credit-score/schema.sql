-- Credit Scores Table
-- Stores calculated credit scores for users

CREATE TABLE IF NOT EXISTS credit_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL CHECK (score >= 300 AND score <= 850),
  factors JSONB NOT NULL,
  confidence DECIMAL(3,2) DEFAULT 0.85 CHECK (confidence >= 0 AND confidence <= 1),
  calculated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_credit_scores_user_id ON credit_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_scores_calculated_at ON credit_scores(calculated_at DESC);

-- Comments
COMMENT ON TABLE credit_scores IS 'Stores calculated credit scores for users';
COMMENT ON COLUMN credit_scores.score IS 'Credit score value (300-850 range)';
COMMENT ON COLUMN credit_scores.factors IS 'JSON breakdown of score factors and contributions';
COMMENT ON COLUMN credit_scores.confidence IS 'Confidence level of the score (0-1)';
COMMENT ON COLUMN credit_scores.calculated_at IS 'When the score was calculated';

-- Example factors JSONB structure:
-- {
--   "paymentHistory": { "score": 85, "weight": 35, "contribution": 29.75 },
--   "financialStability": { "score": 70, "weight": 25, "contribution": 17.5 },
--   "incomeFactors": { "score": 80, "weight": 20, "contribution": 16 },
--   "responsibility": { "score": 75, "weight": 20, "contribution": 15 },
--   "rawFeatures": { ... }
-- }
