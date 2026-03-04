import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'student' | 'employer' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isVerified: boolean;
  university?: string;
  company?: string;
  avatar?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (data: SignupData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  verifyEmail: (token: string) => Promise<{ success: boolean; message: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  updatePassword: (token: string, password: string) => Promise<{ success: boolean; message: string }>;
  isLoading: boolean;
}

interface SignupData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  university?: string;
  company?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('uniworks_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signup = async (data: SignupData): Promise<{ success: boolean; message: string }> => {
    // Mock signup - check if user already exists
    const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
    const existingUser = users.find((u: User) => u.email === data.email);

    if (existingUser) {
      return { success: false, message: 'Email already registered' };
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
      isVerified: false,
      university: data.university,
      company: data.company,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem('uniworks_users', JSON.stringify(users));

    // Mock email verification token
    const verificationToken = btoa(data.email + ':' + Date.now());
    localStorage.setItem('uniworks_verification_' + newUser.id, verificationToken);

    return { 
      success: true, 
      message: 'Account created! Please check your email to verify your account.' 
    };
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
    const foundUser = users.find((u: User) => u.email === email);

    if (!foundUser) {
      return { success: false, message: 'Invalid email or password' };
    }

    if (!foundUser.isVerified) {
      return { success: false, message: 'Please verify your email before logging in' };
    }

    setUser(foundUser);
    localStorage.setItem('uniworks_user', JSON.stringify(foundUser));
    return { success: true, message: 'Login successful!' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('uniworks_user');
  };

  const verifyEmail = async (token: string): Promise<{ success: boolean; message: string }> => {
    const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
    const userIndex = users.findIndex((u: User) => {
      const storedToken = localStorage.getItem('uniworks_verification_' + u.id);
      return storedToken === token;
    });

    if (userIndex === -1) {
      return { success: false, message: 'Invalid or expired verification link' };
    }

    users[userIndex].isVerified = true;
    localStorage.setItem('uniworks_users', JSON.stringify(users));
    localStorage.removeItem('uniworks_verification_' + users[userIndex].id);

    return { success: true, message: 'Email verified successfully! You can now log in.' };
  };

  const resetPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
    const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
    const user = users.find((u: User) => u.email === email);

    if (!user) {
      return { success: false, message: 'No account found with this email' };
    }

    // Mock password reset token
    const resetToken = btoa(email + ':reset:' + Date.now());
    localStorage.setItem('uniworks_reset_' + user.id, resetToken);

    return { success: true, message: 'Password reset link sent to your email' };
  };

  const updatePassword = async (token: string, password: string): Promise<{ success: boolean; message: string }> => {
    const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
    const userIndex = users.findIndex((u: User) => {
      const storedToken = localStorage.getItem('uniworks_reset_' + u.id);
      return storedToken === token;
    });

    if (userIndex === -1) {
      return { success: false, message: 'Invalid or expired reset link' };
    }

    // In a real app, we'd hash the password
    localStorage.removeItem('uniworks_reset_' + users[userIndex].id);

    return { success: true, message: 'Password updated successfully! You can now log in.' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        verifyEmail,
        resetPassword,
        updatePassword,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
