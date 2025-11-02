export default function Hero({ onGetStartedClick }) {
  return (
    <section id="home" className="hero bg-dots-animated">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Redefining <span className="gradient-text">Credit Scoring</span> for Everyone
            </h1>
            <p className="hero-subtitle">
              AltCred uses alternative data and AI to generate credit scores for millions of
              "credit invisible" people, helping them access financial products they deserve.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onGetStartedClick}>
                Calculate Your Score
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual fade-in-right">
            <div className="score-card">
              <div className="score-value">742</div>
              <div className="score-label">AltCred Score</div>
              <div className="score-badge good">Good</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

