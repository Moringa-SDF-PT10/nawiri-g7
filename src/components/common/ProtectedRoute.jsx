// components/common/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"; // <--- Import Outlet
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  // <--- No need for { children } prop here
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // You can make this more visually appealing (e.g., a spinner)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // <--- Renders the nested route's element
};

export default ProtectedRoute;
