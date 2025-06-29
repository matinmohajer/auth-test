'use client';

import {
  createContext, useContext, useEffect, useState, ReactNode,
} from 'react';
import { APIUserResponse } from '../services/userService';
import { AUTH_CONTEXT_ERR } from '../constants/errorMessages';

export interface User extends APIUserResponse {
}

interface AuthCtx {
  user: User | null;
  setUser: (u: User | null) => void;
}

const AuthContext = createContext<AuthCtx | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error(AUTH_CONTEXT_ERR);
  return ctx;
};
