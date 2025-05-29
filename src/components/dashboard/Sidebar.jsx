import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const DashboardSidebar = () => {
  const location = useLocation();
  const { session } = UserAuth();

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-blue-100 text-blue-600"
      : "text-gray-700";
  };

  if (!session) return null;

  return (
    <div className="w-64 bg-white shadow-md h-screen fixed">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-gray-500">{session.user?.name}</p>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard" 
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive("/dashboard")}`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="courses" 
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive("/dashboard/courses")}`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="lessons" 
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive("/dashboard/lessons")}`}
            >
              Lessons
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive("/dashboard/profile")}`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
