import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.userSlice.login);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn !== undefined) {
      setIsAuthenticated(isLoggedIn);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isLoggedIn]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
