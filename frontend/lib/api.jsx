import { API_BASE, API_TIMEOUT, ERROR_MESSAGES } from './config'

/**
 * Custom API Error class
 */
export class APIError extends Error {
  constructor(message, status, data = null) {
    super(message)
    this.name = 'APIError'
    this.status = status
    this.data = data
  }
}

/**
 * Get authentication token from storage
 */
const getAuthToken = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('authToken')
}

/**
 * Set authentication token
 */
export const setAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token)
  }
}

/**
 * Remove authentication token
 */
export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken')
  }
}

/**
 * Create timeout promise
 */
const createTimeoutPromise = (timeout) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new APIError(ERROR_MESSAGES.TIMEOUT_ERROR, 408))
    }, timeout)
  })
}

/**
 * Parse response
 */
const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type')
  
  if (contentType && contentType.includes('application/json')) {
    return await response.json()
  }
  
  return await response.text()
}

/**
 * Handle API errors
 */
const handleError = async (response) => {
  let errorData = null
  
  try {
    errorData = await parseResponse(response)
  } catch (e) {
    // Response is not JSON
  }

  // Get error message from response or use default
  const errorMessage = errorData?.error || errorData?.message || ERROR_MESSAGES.SERVER_ERROR

  throw new APIError(errorMessage, response.status, errorData)
}

/**
 * Base API request function with error handling
 */
export const apiRequest = async (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    headers = {},
    timeout = API_TIMEOUT,
    requireAuth = false,
  } = options

  // Build URL
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`

  // Setup headers
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  // Add auth token if required
  if (requireAuth) {
    const token = getAuthToken()
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`
    }
  }

  // Setup fetch options
  const fetchOptions = {
    method,
    headers: requestHeaders,
  }

  // Add body if present
  if (body && method !== 'GET') {
    fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  try {
    // Create timeout promise and fetch promise
    const fetchPromise = fetch(url, fetchOptions)
    const timeoutPromise = createTimeoutPromise(timeout)

    // Race between fetch and timeout
    const response = await Promise.race([fetchPromise, timeoutPromise])

    // Handle non-ok responses
    if (!response.ok) {
      await handleError(response)
    }

    // Parse and return response
    return await parseResponse(response)
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new APIError(ERROR_MESSAGES.NETWORK_ERROR, 0)
    }

    // Re-throw APIError
    if (error instanceof APIError) {
      throw error
    }

    // Handle unknown errors
    throw new APIError(
      error.message || ERROR_MESSAGES.UNKNOWN_ERROR,
      error.status || 500
    )
  }
}

/**
 * Convenience methods for common HTTP verbs
 */
export const api = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'POST', body }),

  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PUT', body }),

  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PATCH', body }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
}

export default api

