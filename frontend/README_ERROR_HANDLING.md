# Error Handling Guide

This document explains how error handling is implemented in the AltCred frontend.

## 📋 Overview

The frontend now has comprehensive error handling for all API calls, including:
- Network errors
- Timeout errors
- Server errors (400, 401, 404, 500, etc.)
- Validation errors
- Unexpected errors

## 🏗️ Architecture

### 1. API Service Layer (`lib/api.js`)

Centralized API request handler with:
- Automatic token management
- Request timeout handling
- Error parsing and categorization
- Response parsing

**Usage:**
```javascript
import api from '../lib/api'

// GET request
const data = await api.get('/auth/me', { requireAuth: true })

// POST request
const result = await api.post('/auth/register', { name, email, password })

// With error handling
try {
  const result = await api.post('/auth/login', { email, password })
} catch (error) {
  // Error is automatically categorized
  console.error('Login failed:', error.message)
}
```

### 2. Error Handler Utility (`utils/errorHandler.js`)

Converts errors to user-friendly messages:
- Status code-based error messages
- Network error detection
- Timeout error handling

**Usage:**
```javascript
import { getErrorMessage, handleAPIError } from '../utils/errorHandler'

try {
  await someAPICall()
} catch (error) {
  const userMessage = handleAPIError(error, 'ComponentName')
  // userMessage is a user-friendly string
}
```

### 3. Toast Notifications (`components/Toast.js`)

Visual feedback for errors and successes:
- Success toasts (green)
- Error toasts (red)
- Warning toasts (yellow)
- Info toasts (blue)

**Usage in Components:**
```javascript
import { useToastContext } from '../context/ToastContext'

function MyComponent() {
  const toast = useToastContext()
  
  const handleAction = async () => {
    try {
      await api.post('/some-endpoint')
      toast.success('Action completed successfully!')
    } catch (error) {
      toast.error('Failed to complete action')
    }
  }
}
```

**Global Usage (anywhere):**
```javascript
// Available globally after app loads
window.showError('Something went wrong')
window.showSuccess('Success!')
window.showWarning('Warning message')
window.showInfo('Info message')
```

### 4. Error Boundary (`components/ErrorBoundary.js`)

Catches React component errors:
- Catches unhandled errors in components
- Shows user-friendly error page
- Provides error details in development mode
- "Try Again" and "Go Home" buttons

**Already integrated in `_app.js`**

### 5. useAsync Hook (`hooks/useAsync.js`)

Simplifies async operations:
- Automatic loading state
- Error state management
- Success/error callbacks
- Optional toast notifications

**Usage:**
```javascript
import { useAsync } from '../hooks/useAsync'
import { api } from '../lib/api'

function MyComponent() {
  const { loading, error, data, execute } = useAsync(async (userId) => {
    return await api.get(`/users/${userId}`)
  }, {
    showErrorToast: true, // Auto-show error toast
    onSuccess: (data) => {
      console.log('Success!', data)
    },
    onError: (error) => {
      console.error('Error:', error)
    }
  })

  const handleLoad = () => {
    execute(123)
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
      <button onClick={handleLoad} disabled={loading}>
        Load Data
      </button>
    </div>
  )
}
```

## 📝 Example: Full Error Handling

### Example 1: Simple API Call with Error Handling

```javascript
import { useState } from 'react'
import { useToastContext } from '../context/ToastContext'
import { api } from '../lib/api'
import { handleAPIError } from '../utils/errorHandler'

function RegisterForm() {
  const toast = useToastContext()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (formData) => {
    setLoading(true)
    try {
      const result = await api.post('/auth/register', formData)
      toast.success('Registration successful!')
      return result
    } catch (error) {
      const errorMessage = handleAPIError(error, 'RegisterForm')
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    // Form JSX
  )
}
```

### Example 2: Using useAsync Hook

```javascript
import { useAsync } from '../hooks/useAsync'
import { useToastContext } from '../context/ToastContext'
import { api } from '../lib/api'

function CreditScoreComponent() {
  const toast = useToastContext()
  
  const { loading, error, data, execute } = useAsync(
    async (userId) => {
      return await api.get(`/credit/score/${userId}`, { requireAuth: true })
    },
    {
      showErrorToast: true, // Automatically shows error toast
      onSuccess: (data) => {
        toast.success('Credit score loaded successfully!')
      }
    }
  )

  useEffect(() => {
    execute(userId)
  }, [userId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (data) return <div>Score: {data.score}</div>
}
```

## 🔧 Configuration

### API URL Configuration

Set in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Or update `lib/config.js`:
```javascript
export const API_URL = 'http://your-backend-url:4000'
```

### Custom Error Messages

Update `lib/config.js` to customize error messages:
```javascript
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Your custom network error message',
  // ... other messages
}
```

## ✅ Best Practices

1. **Always use try-catch for API calls:**
   ```javascript
   try {
     await api.post('/endpoint', data)
   } catch (error) {
     // Handle error
   }
   ```

2. **Use useAsync hook for complex operations:**
   - Automatic loading/error states
   - Built-in toast notifications
   - Cleaner code

3. **Show user-friendly messages:**
   ```javascript
   toast.error('Please check your internet connection')
   // Instead of: toast.error('NetworkError: Failed to fetch')
   ```

4. **Log errors in development:**
   - Errors are automatically logged in development mode
   - Use `console.error` for additional debugging

5. **Handle specific error cases:**
   ```javascript
   catch (error) {
     if (error.status === 401) {
       // Handle unauthorized
       window.location.href = '/login'
     } else if (error.status === 404) {
       // Handle not found
       toast.error('Resource not found')
     } else {
       // Handle other errors
       toast.error(handleAPIError(error))
     }
   }
   ```

## 🚨 Error Types Handled

- ✅ Network errors (no internet, CORS issues)
- ✅ Timeout errors (request takes too long)
- ✅ 400 Bad Request (validation errors)
- ✅ 401 Unauthorized (authentication required)
- ✅ 404 Not Found
- ✅ 500 Server Error
- ✅ Unexpected errors
- ✅ React component errors (via ErrorBoundary)

## 📚 Files Added

- `lib/config.js` - API configuration
- `lib/api.js` - API service layer
- `utils/errorHandler.js` - Error handling utilities
- `components/Toast.js` - Toast notifications
- `components/ErrorBoundary.js` - React error boundary
- `hooks/useAsync.js` - Async operation hook
- `context/ToastContext.js` - Toast context provider
- `services/auth.api.js` - Example API service

## 🎯 Next Steps

When you add new API calls:

1. Use `api` from `lib/api.js` for requests
2. Wrap in try-catch or use `useAsync` hook
3. Show toast notifications for user feedback
4. Handle specific error cases as needed

Example:
```javascript
import api from '../lib/api'
import { useToastContext } from '../context/ToastContext'

function MyComponent() {
  const toast = useToastContext()
  
  const handleAction = async () => {
    try {
      const result = await api.post('/my-endpoint', data)
      toast.success('Success!')
    } catch (error) {
      toast.error('Action failed. Please try again.')
    }
  }
}
```

