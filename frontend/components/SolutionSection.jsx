import { useProgressBarAnimation } from '../hooks/useScrollAnimations'

export default function SolutionSection() {
  useProgressBarAnimation()

  const solutions = [
    {
      icon: '✅',
      title: 'Collect Alternative Data',
      description: 'Bank transactions, digital payments, rent payments, smartphone activity, and more',
    },
    {
      icon: '🧮',
      title: 'AI-Powered Scoring',
      description: 'Generate Alternative Credit Score (300–900) using behavioral and financial features',
    },
    {
      icon: '🎯',
      title: 'Smart Decisions',
      description: 'Help lenders make informed decisions: Approve, Approve with lower limit, or Reject',
    },
  ]

  const dataPoints = [
    { label: 'Income Stability', width: '85%' },
    { label: 'Payment History', width: '92%' },
    { label: 'Savings Rate', width: '78%' },
    { label: 'Digital Activity', width: '88%' },
  ]

  return (
    <section id="solution" className="section bg-dots-animated">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Solution</h2>
          <p className="section-subtitle">AltCred Score: A fair alternative credit assessment</p>
        </div>
        <div className="solution-content">
          <div className="solution-left fade-in-left">
            <h3>How AltCred Works</h3>
            <ul className="solution-list">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <span className="list-icon">{solution.icon}</span>
                  <div>
                    <strong>{solution.title}</strong>
                    <p>{solution.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="solution-right fade-in-right">
            <div className="features-box">
              <h4>Key Data Points</h4>
              <div className="data-points">
                {dataPoints.map((point, index) => (
                  <div key={index} className="data-point">
                    <span className="point-label">{point.label}</span>
                    <div className="point-bar">
                      <div className="point-fill" style={{ width: point.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

