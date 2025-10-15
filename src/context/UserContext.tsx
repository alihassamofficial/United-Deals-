"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { API_ENDPOINTS } from "@/constants/api";

/**
 * 🧩 User interface (you can extend it later with cart, address, etc.)
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
}

/**
 * 📦 Context type — defines available actions
 */
interface UserContextType {
  user: User | null;
  loading: boolean;
  registerUser: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => Promise<{ success: boolean; message: string }>;
  loginUser: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * 🧠 Provider — wraps your app (see usage below)
 */
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  /**
   * 🗂 Load user from localStorage on first render
   */
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  /**
   * 🪄 Register a new user
   */
  async function registerUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    try {
      const res = await fetch(`${API_ENDPOINTS.USERS}?email=${data.email}`);
      const existing = await res.json();

      if (existing.length > 0) {
        return { success: false, message: "Email already exists" };
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        ...data,
        token: crypto.randomUUID(), // mock token
      };

      await fetch(API_ENDPOINTS.USERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", newUser.token);
      setUser(newUser);

      return { success: true, message: "Account created successfully!" };
    } catch (err) {
      console.error(err);
      return { success: false, message: "Failed to create account" };
    }
  }

  /**
   * 🔐 Login user with email/password
   */
  async function loginUser(email: string, password: string) {
    try {
      const res = await fetch(`${API_ENDPOINTS.USERS}?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        return { success: false, message: "User not found" };
      }

      const found = users[0];
      if (found.password !== password) {
        return { success: false, message: "Invalid password" };
      }

      localStorage.setItem("user", JSON.stringify(found));
      localStorage.setItem("token", found.token);
      setUser(found);
      router.push("/");

      return { success: true, message: "Login successful" };
    } catch (err) {
      console.error(err);
      return { success: false, message: "Login failed" };
    }
  }

  /**
   * 🚪 Logout user
   */
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

/**
 * 🧭 Custom hook — easy usage in any component
 */
export function useCurrentUser() {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error("useCurrentUser must be used within a UserProvider");
  return ctx;
}
