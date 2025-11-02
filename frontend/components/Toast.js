import { useEffect, useState } from 'react'

const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}

export default function Toast({ message, type = TOAST_TYPES.INFO, duration = 5000, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose?.()
      }, 300) // Wait for fade-out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const typeClasses = {
    [TOAST_TYPES.SUCCESS]: 'toast-success',
    [TOAST_TYPES.ERROR]: 'toast-error',
    [TOAST_TYPES.WARNING]: 'toast-warning',
    [TOAST_TYPES.INFO]: 'toast-info',
  }

  const icons = {
    [TOAST_TYPES.SUCCESS]: '✓',
    [TOAST_TYPES.ERROR]: '✕',
    [TOAST_TYPES.WARNING]: '⚠',
    [TOAST_TYPES.INFO]: 'ℹ',
  }

  return (
    <div className={`toast ${typeClasses[type] || ''}`}>
      <span className="toast-icon">{icons[type] || icons[TOAST_TYPES.INFO]}</span>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={() => setIsVisible(false)} aria-label="Close">
        ×
      </button>
    </div>
  )
}

// Toast Container Component
export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}

// Toast Hook
export function useToast() {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = TOAST_TYPES.INFO, duration = 5000) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type, duration }])
    return id
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const success = (message, duration) => showToast(message, TOAST_TYPES.SUCCESS, duration)
  const error = (message, duration) => showToast(message, TOAST_TYPES.ERROR, duration)
  const warning = (message, duration) => showToast(message, TOAST_TYPES.WARNING, duration)
  const info = (message, duration) => showToast(message, TOAST_TYPES.INFO, duration)

  return {
    toasts,
    showToast,
    removeToast,
    success,
    error,
    warning,
    info,
  }
}

