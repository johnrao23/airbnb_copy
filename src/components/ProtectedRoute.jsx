import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isSignedIn, children }) => {
  if (isSignedIn) {
    return children;
  } else {
    <Navigate to="/" />;
    return null;
  }
};

export default ProtectedRoute;
