import { useState, useEffect } from 'react'
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
    setMobileMenuOpen(false)
    
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setTimeout(() => {
        const targetSection = document.getElementById(targetId)
        if (targetSection) {
          const navbar = document.querySelector('.navbar')
          const navHeight = navbar?.offsetHeight || 80 // Fallback to 80px if not found
          
          // Get position relative to viewport
          const rect = targetSection.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetPosition = rect.top + scrollTop - navHeight

          // Smooth scroll with fallback
          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'smooth',
            })
          } else {
            // Fallback for older browsers
            window.scrollTo(0, Math.max(0, targetPosition))
          }
        } else {
          console.warn(`Section with id "${targetId}" not found. Available sections:`, 
            Array.from(document.querySelectorAll('section[id]')).map(s => s.id))
        }
      }, 100)
    })
  }

  // Verify all sections exist on mount (for debugging)
  useEffect(() => {
    const navIds = navItems.map(item => item.id)
    const existingIds = Array.from(document.querySelectorAll('section[id]')).map(s => s.id)
    const missing = navIds.filter(id => !existingIds.includes(id))
    
    if (missing.length > 0) {
      console.warn('Navbar links reference missing sections:', missing)
      console.log('Available sections:', existingIds)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // navItems is static, no need to include in deps

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

