import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../Backend/store/store";

const ProtectedRoute = ({ children }) => {
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  console.log("isSignedIn", isSignedIn);

  if (!isSignedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
