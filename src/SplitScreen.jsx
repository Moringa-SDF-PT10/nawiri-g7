// src/SplitScreen.jsx
import "./App.css";
import nariri_school from "./assets/nariri_school.jpg";
import { Link } from "react-router-dom";

export default function SplitScreen() {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Nawiri</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="split-container">
        <div className="left-pane">
          <h1>Welcome To Nawiri</h1>
          <p>
            Nawiri is a platform that connects students with mentors to help
            them achieve their academic and career goals.
          </p>
          <div className="button-group">
            <button className="primary-button">Student</button>
            <button className="secondary-button">Teacher</button>
          </div>
          <p>
            Are you a new user...
            <Link to="/signup" className="link">
              {" "}
              Sign in{" "}
            </Link>{" "}
            |
            <Link to="/forgot-password" className="link">
              {" "}
              Forget Password{" "}
            </Link>
          </p>
        </div>

        <>
          <div></div>
        </>
        <div className="right-pane">
          <img src={nariri_school} alt="Nariri School" className="full-image" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nawiri. All rights reserved.</p>
      </footer>
    </div>
  );
}
