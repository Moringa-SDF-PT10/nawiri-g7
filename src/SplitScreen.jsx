// src/SplitScreen.jsx
import "./App.css";
import nariri_school from "./assets/nariri_school.jpg";


export default function SplitScreen() {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Nawiri</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Main content */}
      <div className="split-container">
        <div className="left-pane">
          <h1>Welcome To Nawiri</h1>
          <p>
            Nawiri is a platform that connects students with mentors to help them
            achieve their academic and career goals.
          </p>
          <div className="button-group">
            <button className="primary-button">Student</button>
            <button className="secondary-button">Teacher</button>
      
          </div>
          <p>Are you a new user... Sign in | Forget Password</p>
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
