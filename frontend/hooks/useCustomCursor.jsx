import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    let mouseY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    let cursorX = mouseX
    let cursorY = mouseY
    let isMouseMoving = false

    function lerp(start, end, factor) {
      return start + (end - start) * factor
    }

    function animateCursor() {
      cursorX = lerp(cursorX, mouseX, 0.2)
      cursorY = lerp(cursorY, mouseY, 0.2)

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      }

      requestAnimationFrame(animateCursor)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isMouseMoving) {
        isMouseMoving = true
        if (cursor) cursor.style.opacity = '1'
      }

      clearTimeout(window.cursorTimeout)
      window.cursorTimeout = setTimeout(() => {
        if (cursor) cursor.style.opacity = '0.5'
        isMouseMoving = false
      }, 2000)
    }

    // Initialize cursor position
    if (typeof window !== 'undefined') {
      mouseX = window.innerWidth / 2
      mouseY = window.innerHeight / 2
      cursorX = mouseX
      cursorY = mouseY
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Start animation after brief delay
    const animationTimeout = setTimeout(() => {
      animateCursor()
    }, 50)

    // Handle hover effects on interactive elements
    const setupHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .problem-card, .feature-item, .segment-card, .tech-item, input, select, label, .modal-close, .form-group input, .form-group select'
      )

      interactiveElements.forEach((element) => {
        // Remove existing listeners to avoid duplicates
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
        
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    const handleMouseEnter = () => {
      cursor?.classList.add('hover')
    }

    const handleMouseLeave = () => {
      cursor?.classList.remove('hover')
    }

    // Initial setup
    setupHoverEffects()

    // Re-setup when modal opens/closes
    const handleModalOpened = () => {
      setTimeout(() => {
        setupHoverEffects()
      }, 50)
    }

    // Listen for modal open event
    window.addEventListener('modalOpened', handleModalOpened)

    // Also use MutationObserver to watch for modal changes
    const observer = new MutationObserver(() => {
      setupHoverEffects()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('modalOpened', handleModalOpened)
      clearTimeout(animationTimeout)
      clearTimeout(window.cursorTimeout)
      observer.disconnect()
      
      // Clean up event listeners
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .problem-card, .feature-item, .segment-card, .tech-item, input, select, label, .modal-close'
      )
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return cursorRef
}

