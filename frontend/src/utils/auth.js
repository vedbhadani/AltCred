// Temporary auth helper for testing
// This creates a mock token for testing the form submission without full auth

export const createTestToken = () => {
    // For testing only - this won't work with real backend
    // You'll need to either:
    // 1. Register a user via /api/v1/auth/register
    // 2. Login via /api/v1/auth/login to get a real token
    return 'test-token-replace-with-real-jwt';
};

export const saveToken = (token) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', token);
    }
};

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('accessToken');
    }
    return null;
};

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
    }
};
