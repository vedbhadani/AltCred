// API Configuration
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
export const API_BASE = `${API_URL}/api`

// Timeout settings
export const API_TIMEOUT = 30000 // 30 seconds

// Common error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'You are not authorized. Please login again.',
  NOT_FOUND: 'Resource not found.',
  BAD_REQUEST: 'Invalid request. Please check your input.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
}

