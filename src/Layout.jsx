// src/Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function Layout() {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Nawiri</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to ="/About">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Render the page content */}
      <Outlet />

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nawiri. All rights reserved.</p>
      </footer>
    </div>
  );
}
