import { UserAuth } from "../context/AuthContext";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { session } = UserAuth();
  const navigate = useNavigate();

  const handleChangePasswordClick = () => {
    navigate("/reset-password");
  };

  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold mr-4">
              {`name coming soon`}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{`name coming soon`}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Personal Information</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Role:</span> {`Student`}
                </p>
                <p>
                  <span className="font-medium">Member Since:</span>{" "}
                  {`coming soon`}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Account Security</h3>
              <button
                onClick={handleChangePasswordClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
