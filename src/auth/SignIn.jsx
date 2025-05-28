import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);
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
    <div className="signin">
      <form onSubmit={handleSignIn} className="form">
        <h2 className="header">Hi Student, Sign in Here</h2>
        <div className="inputs">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="submit" type="submit" disabled={loading}>
          {" "}
          Sign In
        </button>
        {error && <p className="signin-error"> {error} </p>}
      </form>
    </div>
  );
}

export default SignIn;
