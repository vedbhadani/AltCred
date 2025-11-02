const { errorMessages } = require('./errorMessages');
module.exports = {
  // User validation rules
  USER: {
    PASSWORD: {
      minLength: 8,
      maxLength: 100,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      message: 'Password must be at least 8 characters long and include at least one letter and one number'
    },
    EMAIL: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    PHONE: {
      pattern: /^[0-9]{10,15}$/,
      message: 'Please enter a valid phone number (10-15 digits)'
    },
    FULL_NAME: {
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s'-]+$/,
      message: 'Please enter a valid name (letters, spaces, hyphens, and apostrophes only)'
    }
  },

  CREDIT: {
    INCOME: {
      min: 0,
      max: 10000000,
      message: 'Income must be between 0 and 10,000,000'
    },
    CREDIT_UTILIZATION: {
      min: 0,
      max: 100,
      message: 'Credit utilization must be between 0 and 100%'
    },
    CREDIT_AGE_MONTHS: {
      min: 0,
      max: 1200, 
      message: 'Credit age must be between 0 and 100 years'
    },
    CREDIT_INQUIRIES: {
      min: 0,
      max: 50,
      message: 'Number of credit inquiries must be between 0 and 50'
    }
  },

  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  validatePassword: (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  },

  validatePhone: (phone) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  },

  validateRequired: (value, fieldName) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return `${fieldName} is required`;
    }
    return null;
  },

  validateLength: (value, fieldName, min, max) => {
    if (value.length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    if (value.length > max) {
      return `${fieldName} must not exceed ${max} characters`;
    }
    return null;
  },

  validateNumberRange: (value, fieldName, min, max) => {
    const num = Number(value);
    if (isNaN(num)) {
      return `${fieldName} must be a valid number`;
    }
    if (num < min || num > max) {
      return `${fieldName} must be between ${min} and ${max}`;
    }
    return null;
  }
};