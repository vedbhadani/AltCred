import api, { setAuthToken, removeAuthToken } from '../lib/api'

/**
 * Register a new user
 */
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData)
    
    // Store token if provided
    if (response.token) {
      setAuthToken(response.token)
    }
    
    return response
  } catch (error) {
    throw error
  }
}

/**
 * Login user
 */
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password })
    
    // Store token if provided
    if (response.token) {
      setAuthToken(response.token)
    }
    
    return response
  } catch (error) {
    throw error
  }
}

/**
 * Get current user
 */
export const getCurrentUser = async () => {
  try {
    return await api.get('/auth/me', { requireAuth: true })
  } catch (error) {
    throw error
  }
}

/**
 * Logout user
 */
export const logout = () => {
  removeAuthToken()
}

