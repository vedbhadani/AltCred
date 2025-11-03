import '../styles/globals.css'
import { useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import { ToastProvider, useToastContext } from '../context/ToastContext'
import { ToastContainer } from '../components/Toast'

function AppContent({ Component, pageProps }) {
  const toast = useToastContext()
  
  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])

  // Make toast available globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.showToast = toast.showToast
      window.showError = toast.error
      window.showSuccess = toast.success
      window.showWarning = toast.warning
      window.showInfo = toast.info
    }
  }, [toast])

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </ToastProvider>
    </ErrorBoundary>
  )
}

