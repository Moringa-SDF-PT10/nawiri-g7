import { useState, useEffect } from "react";
import { getUsers } from "../../api/usersApi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                user.role === "admin"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {user.role}
            </span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-8">No users found</p>
      )}
    </div>
  );
};

export default UserList;
