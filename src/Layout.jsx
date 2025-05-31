import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // Check if current path is part of dashboard 
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="page-wrapper">
      {/* Only show navbar if NOT on dashboard routes */}
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

      {/* You can also conditionally hide footer here if you want */}
      {!isDashboard && (
        <footer className="footer">
          <p>© {new Date().getFullYear()} Nawiri. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
