export default function FeaturesSection() {
  const features = [
    { icon: '📱', title: 'Digital Behavior Index', description: 'Based on UPI usage, app spends, online shopping frequency' },
    { icon: '🏠', title: 'Geo Index', description: 'Regional cost of living + city tier impact' },
    { icon: '📊', title: 'Credit Simulator', description: 'See how changing habits affects your score' },
    { icon: '💬', title: 'AI Advisor Bot', description: 'Personalized suggestions using AI' },
    { icon: '🧾', title: 'Income Stability Tracker', description: 'Detect irregular income patterns' },
    { icon: '📅', title: 'EMI Prediction Engine', description: 'Predicts EMI repayment capability' },
    { icon: '🔐', title: 'Secure OAuth Integration', description: 'Connects to user\'s bank securely' },
    { icon: '📈', title: 'History Graph', description: 'Visualize score trends month-over-month' },
    { icon: '⚙️', title: 'Explainability Module', description: 'Shows why the score increased or decreased' },
  ]

  return (
    <section id="features" className="section bg-dots-animated">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Additional Features</h2>
          <p className="section-subtitle">Powerful tools to improve your creditworthiness</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item fade-in-up">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

