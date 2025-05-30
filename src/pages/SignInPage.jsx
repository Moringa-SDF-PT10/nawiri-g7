import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/auth/SignInForm2";
import { Link } from "react-router-dom";

function SignInPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="split-container animated-container">
      {" "}
      <div className="left-pane fade-in-left p-4">
        <div className="flex flex-col w-full md:w-1/2 p-4 bg-gray-100 rounded-lg">
          <div className="flex flex-col flex-1 justify-center mb-8">
            <h1 className="text-4xl text-center font-thin text-rose-900">
              Welcome Back
            </h1>
            <div className="w-full mt-4 flex flex-col gap-2">
              <SignInForm onSubmit={handleSignIn} />
              {error && (
                <div className="mb-4 p-2 bg-red-100 w-4/5 text-red-700 rounded self-center">
                  {error}
                </div>
              )}
              <div className="text-center mt-4">
                <a
                  className="no-underline hover:underline text-blue-dark text-xs"
                  href="/reset-password"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block md:w-1/2 rounded-r-lg fade-in-right"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
    </div>
  );
}
export default SignInPage;
