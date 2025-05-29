import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/auth/SignUpForm";
import { Link } from "react-router-dom";

function SignUpPage() {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (userData) => {
    
    setLoading(true);
    try {
      const result = await signUpNewUser(userData.email, userData.password);
      if (result.success) {
        navigate("/dashboard-student");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      <SignUpForm onSubmit={handleSignUp} className="form" />
          <div className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
