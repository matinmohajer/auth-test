"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface User {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

interface AuthContextProps {
  user: User | null;
  login: (phone: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // On mount, hydrate from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = async (phone: string) => {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const u = data.results[0];
    const newUser: User = {
      name: `${u.name.first} ${u.name.last}`,
      email: u.email,
      avatar: u.picture.thumbnail,
      phone,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
