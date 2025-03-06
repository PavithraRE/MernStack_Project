import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // If user is not logged in, store the last page in "state" before redirecting
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
