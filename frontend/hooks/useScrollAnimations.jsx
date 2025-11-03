import { useEffect, useRef } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right'
    )

    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

export function useProgressBarAnimation() {
  useEffect(() => {
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.point-fill')
            progressBars.forEach((bar) => {
              const width = bar.style.width
              bar.style.width = '0'
              setTimeout(() => {
                bar.style.width = width
              }, 100)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const solutionSection = document.querySelector('.solution-content')
    if (solutionSection) {
      progressObserver.observe(solutionSection)
    }

    return () => {
      if (solutionSection) {
        progressObserver.unobserve(solutionSection)
      }
    }
  }, [])
}

