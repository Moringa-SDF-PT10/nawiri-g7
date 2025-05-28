import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate()
  

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
        const result = await signUpNewUser(email, password)
        if(result.success) {
            navigate("/dashboard-student")
        }
    } catch (err) {
        setError("An error occurred")
    } finally {
        setLoading(false)
    }
  }

  return (
    <div className="signup">
      <form onSubmit={handleSignUp} className="form">
        <h2 className="header">Sign up today!</h2>
        <div className="inputs">
          <input onChange={(e) => setEmail(e.target.value)} className="email" placeholder="Email" type="email" />
          <input onChange={(e) => setPassword(e.target.value)} className="password" placeholder="Password" type="password" />
        </div>
        <button className="submit" type="submit" disabled={loading}>
          {" "}
          Sign Up
        </button>
        {error && <p className="signup-error"> {error}  </p>}
      </form>
    </div>
  );
}

export default SignUp;
