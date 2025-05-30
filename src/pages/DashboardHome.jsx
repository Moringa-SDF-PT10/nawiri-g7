import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { UserAuth } from "../context/AuthContext";
import DashboardOverview from "./DashboardOverview";

const DashboardHome = () => {
  const { session } = UserAuth();

  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

        <p>Welcome, {session?.user?.email}!</p>
        <DashboardOverview />
      </div>
    </div>
  );
};

export default DashboardHome;
