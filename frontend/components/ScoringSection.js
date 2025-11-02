export default function ScoringSection() {
  const weights = [
    { label: 'EMI On-Time Rate', value: '15%' },
    { label: 'Bill On-Time Rate', value: '10%' },
    { label: 'Savings Rate', value: '10%' },
    { label: 'Rent Payment History', value: '10%' },
    { label: 'Income Factor', value: '10%' },
    { label: 'Job Stability', value: '8%' },
    { label: 'Avg Balance Factor', value: '7%' },
    { label: 'Debt Management', value: '20%' },
  ]

  return (
    <section id="scoring" className="section bg-dots-animated">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Scoring Model</h2>
          <p className="section-subtitle">AI-powered algorithms for accurate credit assessment</p>
        </div>
        <div className="scoring-content">
          <div className="scoring-cards">
            <div className="scoring-card fade-in-left">
              <h3>Option A: Rule-Based Weighted Score</h3>
              <p>A transparent, explainable scoring model using weighted factors:</p>
              <div className="weight-list">
                {weights.map((weight, index) => (
                  <div key={index} className="weight-item">
                    <span className="weight-label">{weight.label}</span>
                    <span className="weight-value">{weight.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scoring-card fade-in-right">
              <h3>Option B: ML Model</h3>
              <p>Advanced machine learning using XGBoost, LightGBM, or RandomForest:</p>
              <ul className="ml-features">
                <li>✅ Regression model for score prediction</li>
                <li>✅ Feature importance analysis</li>
                <li>✅ High accuracy with MAE and RMSE metrics</li>
                <li>✅ API endpoint for real-time scoring</li>
              </ul>
              <div className="api-example">
                <code>
                  {`{
  "alt_credit_score": 783,
  "risk_level": "Excellent",
  "confidence": 0.94
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

