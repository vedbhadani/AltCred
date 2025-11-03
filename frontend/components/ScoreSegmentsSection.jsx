export default function ScoreSegmentsSection() {
  const segments = [
    { range: '800–900', title: 'Excellent', risk: 'Very Low Risk', description: 'Eligible for all loans', class: 'excellent' },
    { range: '700–799', title: 'Good', risk: 'Low Risk', description: 'Minor improvements suggested', class: 'good' },
    { range: '600–699', title: 'Fair', risk: 'Moderate Risk', description: 'Monitor bills and EMIs', class: 'fair' },
    { range: '500–599', title: 'Poor', risk: 'High Risk', description: 'Improve repayment consistency', class: 'poor' },
    { range: '<500', title: 'Very Poor', risk: 'Very High Risk', description: 'Not eligible currently', class: 'very-poor' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Score Segments</h2>
          <p className="section-subtitle">Understanding your AltCred Score</p>
        </div>
        <div className="segments-grid">
          {segments.map((segment, index) => (
            <div key={index} className={`segment-card ${segment.class} fade-in-up`}>
              <div className="segment-range">{segment.range}</div>
              <div className="segment-title">{segment.title}</div>
              <div className="segment-risk">{segment.risk}</div>
              <p>{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

