import { useState } from "react";

function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4">
        <input
          id="email"
          type="text"
          className="flex-grow h-8 px-2 border rounded border-grey-400"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col mt-4">
        <input
          id="password"
          type="password"
          className="flex-grow h-8 px-2 rounded border border-grey-400"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center mt-4">
        <input type="checkbox" name="remember" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-sm text-grey-dark">
          Remember Me
        </label>
      </div>
      <div className="flex flex-col mt-8 transition-all duration-300 ease-in-out">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
        
      </div>
      
      
    </form>
  );
}
export default SignInForm;
