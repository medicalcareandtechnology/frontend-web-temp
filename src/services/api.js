import axios from 'axios';

/**
 * API Service Layer
 * Centralized Axios instance for all backend communication
 */

// Get API base URL from environment variables, fallback for local dev
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Create a single, robust Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // Optional: timeout after 10 seconds
    timeout: 10000,
});

/**
 * Request Interceptor
 * Useful for attaching Auth Tokens to every request automatically
 */
apiClient.interceptors.request.use(
    (config) => {
        // Automatically attach token if available
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * Centralized error handling (e.g., logging out on 401 Unauthorized)
 */
apiClient.interceptors.response.use(
    (response) => {
        // Return just the data part by default for cleaner component code
        return response.data;
    },
    (error) => {
        // Global error handling
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('API Error Response:', error.response.data);

            if (error.response.status === 401) {
                // Auto-logout user on unauthorized
                // localStorage.removeItem('auth_token');
                // window.location.href = '/login';
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API No Response:', error.request);
            // Throw a user-friendly network error
            return Promise.reject(new Error('Unable to connect to the server. Please check your internet connection.'));
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('API Request Setup Error:', error.message);
        }

        // Return a standardized error object or just the response data's error message
        const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
        return Promise.reject(new Error(errorMessage));
    }
);

/**
 * API Service class for specific domain operations
 */
class ApiService {
    /**
     * Register a new user
     * @param {string} name 
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<object>}
     */
    async registerUser(name, email, password) {
        return apiClient.post('/auth/register', { name, email, password });
    }

    /**
     * Login existing user
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<object>}
     */
    async loginUser(email, password) {
        return apiClient.post('/auth/login', { email, password });
    }

    /**
     * Submit contact form data
     * @param {object} formData 
     * @returns {Promise<object>}
     */
    async submitContactForm(formData) {
        return apiClient.post('/contact', formData);
    }

    /**
     * Check API health
     * @returns {Promise<object>}
     */
    async checkHealth() {
        return apiClient.get('/health');
    }

    /**
     * Subscribe to newsletter
     * @param {string} email 
     * @returns {Promise<object>}
     */
    async subscribeToNewsletter(email) {
        // For standard backend, this would just be:
        // return apiClient.post('/newsletter', { email });

        // Since the current implementation uses a special Google Apps Script URL
        // we handle this uniquely without the base URL interceptors
        const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        if (!scriptUrl) {
            throw new Error('Newsletter configuration error');
        }

        try {
            // Using standard fetch since this is a third-party script, 
            // not our standard Axios backend.
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ email }),
            });
            return { success: true };
        } catch (error) {
            throw new Error('Failed to subscribe.');
        }
    }

    //---------------------------------------------------------
    // Payment specific methods (moved from paymentService.js)
    //---------------------------------------------------------

    /**
     * Create a new payment order
     * @param {number} amount
     * @returns {Promise<object>}
     */
    async createOrder(amount) {
        return apiClient.post('/payment/create-order', { amount });
    }

    /**
     * Verify a completed Razorpay payment
     * @param {object} paymentData 
     * @returns {Promise<object>}
     */
    async verifyPayment(paymentData) {
        return apiClient.post('/payment/verify-payment', paymentData);
    }
}

// Export a singleton instance
const apiService = new ApiService();
export default apiService;

// Named exports for specific functions for convenience
export const registerUser = (name, email, password) => apiService.registerUser(name, email, password);
export const loginUser = (email, password) => apiService.loginUser(email, password);
export const submitContactForm = (formData) => apiService.submitContactForm(formData);
export const checkApiHealth = () => apiService.checkHealth();
export const subscribeToNewsletter = (email) => apiService.subscribeToNewsletter(email);

// Payment exports
export const createOrder = (amount) => apiService.createOrder(amount);
export const verifyPayment = (paymentData) => apiService.verifyPayment(paymentData);
