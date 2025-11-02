import { ERROR_MESSAGES } from '../lib/config'

/**
 * Get user-friendly error message from error
 */
export const getErrorMessage = (error) => {
  // If error is already a string
  if (typeof error === 'string') {
    return error
  }

  // If error has a message property
  if (error?.message) {
    // Check if it's an API error with specific status
    if (error?.status) {
      switch (error.status) {
        case 400:
          return error.message || ERROR_MESSAGES.BAD_REQUEST
        case 401:
          return ERROR_MESSAGES.UNAUTHORIZED
        case 404:
          return ERROR_MESSAGES.NOT_FOUND
        case 408:
          return ERROR_MESSAGES.TIMEOUT_ERROR
        case 500:
        case 502:
        case 503:
          return ERROR_MESSAGES.SERVER_ERROR
        default:
          return error.message || ERROR_MESSAGES.UNKNOWN_ERROR
      }
    }
    
    return error.message
  }

  // Default error message
  return ERROR_MESSAGES.UNKNOWN_ERROR
}

/**
 * Log error for debugging (in development)
 */
export const logError = (error, context = '') => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[Error${context ? ` - ${context}` : ''}]`, error)
    
    if (error?.stack) {
      console.error('Stack trace:', error.stack)
    }
  }
}

/**
 * Handle API error and return user-friendly message
 */
export const handleAPIError = (error, context = '') => {
  logError(error, context)
  return getErrorMessage(error)
}

