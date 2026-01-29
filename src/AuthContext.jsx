import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => {
    return localStorage.getItem("authToken");
  });

  const isAuthenticated = !!token;

  const login = (newToken) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
    navigate("/"); // or /dashboard
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
