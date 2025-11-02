import { useState, useCallback } from 'react'
import { handleAPIError } from '../utils/errorHandler'

/**
 * Custom hook for handling async operations with loading and error states
 * @param {Function} asyncFunction - The async function to execute
 * @param {Object} options - Options for error handling
 * @param {boolean} options.showErrorToast - Show error toast on failure (default: true)
 * @param {Function} options.onError - Custom error callback
 * @param {Function} options.onSuccess - Custom success callback
 */
export function useAsync(asyncFunction, options = {}) {
  const { showErrorToast = true, onError, onSuccess } = options
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true)
        setError(null)
        const result = await asyncFunction(...args)
        setData(result)
        
        // Call success callback if provided
        if (onSuccess) {
          onSuccess(result)
        }
        
        return { success: true, data: result }
      } catch (err) {
        const errorMessage = handleAPIError(err, 'useAsync')
        setError(errorMessage)
        setData(null)
        
        // Show error toast if enabled
        if (showErrorToast && typeof window !== 'undefined' && window.showError) {
          window.showError(errorMessage)
        }
        
        // Call error callback if provided
        if (onError) {
          onError(err, errorMessage)
        }
        
        return { success: false, error: errorMessage }
      } finally {
        setLoading(false)
      }
    },
    [asyncFunction, showErrorToast, onError, onSuccess]
  )

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setData(null)
  }, [])

  return {
    loading,
    error,
    data,
    execute,
    reset,
  }
}

