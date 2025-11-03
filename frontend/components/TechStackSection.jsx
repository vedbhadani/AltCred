export default function TechStackSection() {
  const techItems = [
    { category: 'Frontend', tools: 'Next.js, TailwindCSS, Recharts' },
    { category: 'Backend', tools: 'FastAPI / Express.js' },
    { category: 'Database', tools: 'PostgreSQL or MongoDB' },
    { category: 'ML Model', tools: 'scikit-learn, XGBoost' },
    { category: 'Deployment', tools: 'AWS EC2 + S3 + RDS' },
    { category: 'Auth', tools: 'Firebase / Auth0' },
    { category: 'CI/CD', tools: 'GitHub Actions' },
    { category: 'Visualization', tools: 'Streamlit (for dashboards)' },
  ]

  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Built with modern, scalable technologies</p>
        </div>
        <div className="tech-grid">
          {techItems.map((item, index) => (
            <div key={index} className="tech-item fade-in-up">
              <div className="tech-category">{item.category}</div>
              <div className="tech-tools">{item.tools}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

