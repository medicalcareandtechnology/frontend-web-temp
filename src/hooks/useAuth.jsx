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
                const userData = localStorage.getItem('user_data');
                if (token && userData) {
                    // Populate with real stored user session
                    setUser(JSON.parse(userData));
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
            const data = await apiService.loginUser(email, password);

            // Save state securely
            setUser(data.user);
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user_data', JSON.stringify(data.user));

            return { success: true, user: data.user };
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
            const data = await apiService.registerUser(name, email, password);

            // Save state
            setUser(data.user);
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user_data', JSON.stringify(data.user));

            return { success: true, user: data.user };
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
        localStorage.removeItem('user_data');
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
