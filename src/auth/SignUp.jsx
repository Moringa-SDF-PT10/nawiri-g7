import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  return (
    <>
      <form className="signup-form">
        <h2 className="header">Sign up today!</h2>
        <div className="inputs">
          <input
            className="email"
            placeholder="Email"
            type="email"

          />
          <input
            className="password"
            placeholder="Password"
            type="password"

          />
        </div>
        <button className="submit" type="submit" disabled={loading}> Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;
