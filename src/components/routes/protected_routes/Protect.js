import React from "react";
import { useAuth } from "../../context/Context";
import { useLocation, Navigate } from "react-router-dom";

export const Protect = ({ children }) => {
  const auth = useAuth();

  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default Protect;
