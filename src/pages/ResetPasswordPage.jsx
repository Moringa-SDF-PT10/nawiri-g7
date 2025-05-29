import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  const { resetUserPassword } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (email) => {
    const result = await resetUserPassword(email);
    if (result.success) {
      setMessage("Password reset link sent to your email");
      setError("");
    } else {
      setError(result.message || "Failed to send reset link");
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      <ResetPasswordForm onSubmit={handleResetPassword} />
      <div className="mt-4 text-center">
        <a href="/login" className="text-blue-600 hover:underline">
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
