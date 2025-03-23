import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/project2/dashboard" />;
  }

  return children;
};

export default PublicRoute;
