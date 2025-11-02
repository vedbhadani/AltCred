import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])

  return <Component {...pageProps} />
}

