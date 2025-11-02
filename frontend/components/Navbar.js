import { useState } from 'react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

export default function Navbar({ onGetStartedClick }) {
  const scrolled = useNavbarScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Features' },
    { id: 'scoring', label: 'Scoring' },
    { id: 'tech', label: 'Tech Stack' },
  ]

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      const navbar = document.querySelector('.navbar')
      const navHeight = navbar?.offsetHeight || 0
      const targetPosition = targetSection.offsetTop - navHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo-container">
            <img
              src="/logo.png"
              alt="AltCred Logo"
              className="logo"
            />
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-nav={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="cta-button" onClick={onGetStartedClick}>
            Get Started
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}

