export default function ProblemSection() {
  const problems = [
    {
      icon: '❌',
      title: 'Credit Invisible',
      description:
        "Millions of students, freelancers, and first-time borrowers have no credit history with traditional bureaus like CIBIL or Experian.",
    },
    {
      icon: '📊',
      title: 'Limited Data Sources',
      description:
        'Traditional systems only rely on loan repayment history and credit card data, ignoring digital financial behavior.',
    },
    {
      icon: '🚫',
      title: 'Unfair Access',
      description:
        'Creditworthy individuals are denied loans simply because they lack a traditional credit record.',
    },
  ]

  return (
    <section id="problem" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">The Problem</h2>
          <p className="section-subtitle">Traditional credit systems leave millions behind</p>
        </div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`problem-card ${
                index === 0 ? 'fade-in-left' : index === 1 ? 'fade-in-up' : 'fade-in-right'
              }`}
            >
              <div className="card-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

