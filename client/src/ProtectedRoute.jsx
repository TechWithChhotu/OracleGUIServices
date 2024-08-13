import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading || isAuthenticated === null) {
    // Show a loading indicator while waiting for auth state
    return (
      <div className="h-[80%] flex justify-center items-center">Loading...</div>
    ); // Replace with your loading spinner or component
  }

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
