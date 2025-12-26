/**
 * API Service Layer
 * Centralized API communication for the NeoMotion frontend
 */

// Get API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

/**
 * API Service class for handling all API requests
 */
class ApiService {
    /**
     * Make a fetch request with error handling
     * @param {string} endpoint - API endpoint (e.g., '/api/contact')
     * @param {object} options - Fetch options
     * @returns {Promise<object>} Response data
     */
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;

        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        const config = { ...defaultOptions, ...options };

        try {
            const response = await fetch(url, config);

            // Parse JSON response
            const data = await response.json();

            // Check if response is successful
            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            // Handle network errors
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error('Unable to connect to the server. Please check your internet connection.');
            }

            // Re-throw other errors
            throw error;
        }
    }

    /**
     * Submit contact form data
     * @param {object} formData - Contact form data
     * @param {string} formData.name - User's name
     * @param {string} formData.email - User's email
     * @param {string} formData.phone - User's phone number
     * @param {string} formData.message - User's message
     * @returns {Promise<object>} Response from server
     */
    async submitContactForm(formData) {
        return this.request('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
    }

    /**
     * Check API health
     * @returns {Promise<object>} Health status
     */
    async checkHealth() {
        return this.request('/api/health', {
            method: 'GET',
        });
    }
}

// Export a singleton instance
const apiService = new ApiService();
export default apiService;

// Named exports for specific functions
export const submitContactForm = (formData) => apiService.submitContactForm(formData);
export const checkApiHealth = () => apiService.checkHealth();
