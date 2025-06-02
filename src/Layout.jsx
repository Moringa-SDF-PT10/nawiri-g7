import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="page-wrapper">
      {!isDashboard && (
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Nawiri</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      )}

      <Outlet />

      {!isDashboard && (
        <footer className="footer">
          <p>© {new Date().getFullYear()} Nawiri. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
