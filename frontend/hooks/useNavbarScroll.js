import { useEffect, useState } from 'react'

export function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setScrolled(currentScroll > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrolled
}

