import { useState, useEffect } from 'react'
import Head from 'next/head'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import ScoringSection from '../components/ScoringSection'
import ScoreSegmentsSection from '../components/ScoreSegmentsSection'
import FeaturesSection from '../components/FeaturesSection'
import TechStackSection from '../components/TechStackSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import GetStartedModal from '../components/GetStartedModal'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  useScrollAnimations()

  useEffect(() => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .btn-primary')
    
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span')
        ripple.style.position = 'absolute'
        ripple.style.borderRadius = '50%'
        ripple.style.background = 'rgba(255, 255, 255, 0.5)'
        ripple.style.transform = 'scale(0)'
        ripple.style.animation = 'ripple 0.6s ease-out'
        ripple.style.left = '50%'
        ripple.style.top = '50%'
        ripple.style.width = '100px'
        ripple.style.height = '100px'
        ripple.style.marginLeft = '-50px'
        ripple.style.marginTop = '-50px'
        
        button.style.position = 'relative'
        button.style.overflow = 'hidden'
        button.appendChild(ripple)
        
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })

    // Add ripple animation to CSS if not exists
    if (!document.getElementById('ripple-animation')) {
      const style = document.createElement('style')
      style.id = 'ripple-animation'
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Parallax effect for hero section (disabled for better UX)
    // let ticking = false
    // function updateParallax() {
    //   const scrolled = window.pageYOffset
    //   const hero = document.querySelector('.hero')
    //   if (hero) {
    //     hero.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`
    //   }
    //   ticking = false
    // }

    // const handleScroll = () => {
    //   if (!ticking) {
    //     window.requestAnimationFrame(updateParallax)
    //     ticking = true
    //   }
    // }

    // window.addEventListener('scroll', handleScroll)

    // Handle Escape key for modal
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    // Prevent body scroll when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      // window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  const handleGetStarted = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    // Console welcome message
    console.log('%c🚀 AltCred', 'color: #4FC3F7; font-size: 20px; font-weight: bold;')
    console.log('%cAlternative Credit Scoring Platform', 'color: #81D4FA; font-size: 14px;')
  }, [])

  return (
    <>
      <Head>
        <title>AltCred - Alternative Credit Scoring</title>
        <meta name="description" content="AltCred uses alternative data and AI to generate credit scores for millions of credit invisible people" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />
      <Navbar onGetStartedClick={handleGetStarted} />
      <Hero onGetStartedClick={handleGetStarted} />
      <ProblemSection />
      <SolutionSection />
      <ScoringSection />
      <ScoreSegmentsSection />
      <FeaturesSection />
      <TechStackSection />
      <CTASection onGetStartedClick={handleGetStarted} />
      <Footer />
      <GetStartedModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  )
}

