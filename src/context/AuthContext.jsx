import { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser, resetPassword } from '../api/authApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            const userData = await loginUser(credentials);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const register = async (userData) => {
        try {
            const newUser = await registerUser(userData);
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const resetUserPassword = async (email) => {
        try {
            await resetPassword(email);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message };
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, resetUserPassword }}>
            {children}
        </AuthContext.Provider>
    );
};