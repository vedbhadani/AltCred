export default function CTASection({ onGetStartedClick }) {
  return (
    <section className="cta-section bg-dots-animated">
      <div className="container">
        <div className="cta-content fade-in-up">
          <h2>Ready to Get Your AltCred Score?</h2>
          <p>Join thousands of users building their credit profile with alternative data</p>
          <button className="btn btn-primary btn-large" onClick={onGetStartedClick}>
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

