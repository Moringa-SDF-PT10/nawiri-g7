import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const DashboardOverview = () => {
  const { session } = UserAuth();

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 bg-[#e8ded4]">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome, {session?.user?.email}!
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Nawiri is your one-stop solution for online learning and personal
          growth.
        </p>
        <div className="flex justify-center space-x-4">Happy Coding!</div>
      </div>
    </div>
  );
};

export default DashboardOverview;
