import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"> Nawiri </Link>{" "}
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nawiri. All rights reserved.</p>
      </footer>
    </div>
  );
}
