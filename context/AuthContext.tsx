import { createContext, useState, ReactNode, useCallback } from 'react';
import type { User, UserRole } from '../types';
import { mockUsers } from '../constants';

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
    switchUser: (role: UserRole) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        // Check local storage for a saved user session
        try {
            const savedUser = localStorage.getItem('user');
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            return null;
        }
    });

    const login = useCallback((role: UserRole) => {
        const userToLogin = mockUsers[role];
        if (userToLogin) {
            setUser(userToLogin);
            localStorage.setItem('user', JSON.stringify(userToLogin));
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        // Redirect to home page after logout
        window.location.href = '/';
    }, []);

    const switchUser = useCallback((role: UserRole) => {
        login(role);
    }, [login]);

    const value = { user, login, logout, switchUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};