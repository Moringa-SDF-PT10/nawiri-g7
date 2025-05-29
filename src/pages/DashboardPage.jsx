import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/dashboard/Sidebar";
import ActivityLog from "../components/dashboard/ActivityLog";
import UserList from "../components/dashboard/UserList";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        {user?.role === "admin" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <ActivityLog />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Users</h2>
                <UserList />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
