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

    /**
     * Subscribe to newsletter
     * @param {string} email - User's email
     * @returns {Promise<object>} Response from server
     */
    async subscribeToNewsletter(email) {
        const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        if (!scriptUrl) {
            console.error('Google Script URL not configured');
            throw new Error('Configuration error');
        }

        // Google Apps Script requires no-cors for simple posts usually, or specific handling
        // but typically standard fetch works if the script returns JSON and CORS is handled there (web app set to 'Anyone').
        // However, 'no-cors' mode might be needed if we don't care about response body reading in strict environments.
        // Let's try standard POST. The provided script returns JSON.

        // Note: fetch to Google Apps Script often needs 'no-cors' if CORS headers aren't perfect, 
        // but 'no-cors' makes the response opaque.
        // Usually, to get a result, we use a workaround or form submission.
        // Let's use simple fetch with mode 'no-cors' if we just want to submit, but we can't check success easily.
        // BUT, if the script is deployed as "Anyone", it usually supports CORS if returning the right headers/content type.
        // The provided script returns `ContentService.createTextOutput...setMimeType(JSON)`. 
        // Google Apps Script usually handles CORS redirects automatically.

        // Debugging: Log the URL to ensure it's loaded
        console.log('Sending to Google Script:', scriptUrl);

        // using text/plain for the Content-Type to ensure successful transmission 
        // with mode: 'no-cors' which prevents preflight checks and header stripping issues.
        // The Google Apps Script will still parse the JSON string body.
        return fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify({ email }),
        });
    }
}

// Export a singleton instance
const apiService = new ApiService();
export default apiService;

// Named exports for specific functions
export const submitContactForm = (formData) => apiService.submitContactForm(formData);
export const checkApiHealth = () => apiService.checkHealth();
export const subscribeToNewsletter = (email) => apiService.subscribeToNewsletter(email);
