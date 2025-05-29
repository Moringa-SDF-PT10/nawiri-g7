import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { session, loading } = UserAuth();

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
    );
  }

  return session ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
