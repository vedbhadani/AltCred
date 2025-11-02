module.exports = {
  // Authentication errors
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'Authentication required',
    INVALID_TOKEN: 'Invalid or expired token',
    ACCESS_DENIED: 'You do not have permission to access this resource',
    ACCOUNT_EXISTS: 'An account with this email already exists',
    ACCOUNT_NOT_FOUND: 'User account not found',
    PASSWORD_MISMATCH: 'Passwords do not match',
    PASSWORD_WEAK: 'Password must be at least 8 characters long and include a number',
    EMAIL_INVALID: 'Please provide a valid email address'
  },

  // Validation errors
  VALIDATION: {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PHONE: 'Please enter a valid phone number',
    INVALID_DATE: 'Please enter a valid date',
    INVALID_AMOUNT: 'Please enter a valid amount',
    MIN_LENGTH: (field, length) => `${field} must be at least ${length} characters`,
    MAX_LENGTH: (field, length) => `${field} must not exceed ${length} characters`,
    INVALID_TYPE: (field, type) => `${field} must be of type ${type}`
  },

  // Credit scoring errors
  CREDIT: {
    INSUFFICIENT_DATA: 'Insufficient data to calculate credit score',
    SCORE_NOT_FOUND: 'Credit score not found for this user',
    INVALID_CREDIT_DATA: 'Invalid credit data provided',
    CALCULATION_FAILED: 'Failed to calculate credit score'
  },

  // Server errors
  SERVER: {
    INTERNAL_ERROR: 'An unexpected error occurred',
    SERVICE_UNAVAILABLE: 'Service temporarily unavailable',
    MAINTENANCE_MODE: 'Service is currently under maintenance',
    RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later'
  },

  // Database errors
  DATABASE: {
    CONNECTION_ERROR: 'Database connection error',
    QUERY_ERROR: 'Error executing database query',
    RECORD_NOT_FOUND: 'The requested record was not found',
    DUPLICATE_ENTRY: 'A record with these details already exists'
  }
};
