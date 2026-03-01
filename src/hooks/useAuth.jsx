import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

// Create the context
const AuthContext = createContext(null);

/**
 * Authentication Provider Component
 * Wraps the application to provide auth state globally
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Initialization: Check if user is already logged in (e.g., has a token)
    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    // In a full implementation, you'd likely verify the token with the backend here.
                    // For now, we mock a basic user object.
                    setUser({ id: '1', name: 'Existing User' });

                    // Attach token to API client requests
                    // apiService.apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
            } catch (error) {
                console.error("Failed to restore session", error);
            } finally {
                setLoading(false);
            }
        };

        checkLoggedIn();
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            // Replace with actual API call: const response = await apiService.request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
            console.log('Mock Login attempt', { email, password });

            // Mock successful response
            const mockUser = { id: '1', name: 'Test User', email };
            const mockToken = 'mock_jwt_token_12345';

            // Save state
            setUser(mockUser);
            localStorage.setItem('auth_token', mockToken);

            return { success: true, user: mockUser };
        } catch (error) {
            console.error("Login failed", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const register = async (name, email, password) => {
        setLoading(true);
        try {
            // Replace with actual API call
            console.log('Mock Register attempt', { name, email, password });

            // Mock successful response
            const mockUser = { id: '2', name, email };
            const mockToken = 'mock_jwt_token_67890';

            setUser(mockUser);
            localStorage.setItem('auth_token', mockToken);

            return { success: true, user: mockUser };
        } catch (error) {
            console.error("Registration failed", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_token');
        // Remove token from API client if it was attached
        // delete apiService.apiClient.defaults.headers.common['Authorization'];
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

/**
 * Hook to use the Auth context
 * @returns {Object} { user, loading, login, register, logout, isAuthenticated }
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default useAuth;
