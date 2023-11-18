import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const userName = localStorage.getItem("userName");
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  // Conditions to determine which navigation links to display based on the current URL path
  const shouldShowLogin = !["/login", "/dashboard"].includes(location.pathname);
  const shouldShowSignup = !["/signup", "/dashboard"].includes(
    location.pathname
  );
  const shouldShowdashboard = ![
    "/signup",
    "/login",
    "/forgot-password",
    "/verify-token/:token",
    "/reset-password/:token",
    "/",
  ].includes(location.pathname);

  return (
    <nav className="navbar py-1 sticky-top navbar-expand-lg text-white header-container ">
      <Link to="/dashboard">
        <img
          src="/mylogo.png"
          width="160"
          height="70"
          className="navbar-brand"
          alt="Brand Logo"
        />
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse ml-2 navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {shouldShowSignup && (
            <li className="nav-item active">
              <h4>
                <Link
                  className="nav-link text-white text-uppercase"
                  to="/signup"
                >
                  Signup
                </Link>
              </h4>
            </li>
          )}
          {shouldShowLogin && (
            <li className="nav-item active">
              <h4>
                <Link
                  className="nav-link text-white text-uppercase"
                  to="/login"
                >
                  Login
                </Link>
              </h4>
            </li>
          )}
          {shouldShowdashboard && (
            <>
              <li className="nav-item text-white">
                <h4>
                  <Link className="nav-link" to="#">
                    <span className="text-white">{userName}</span>
                  </Link>
                </h4>
              </li>
              <li className="nav-item">
                <h4>
                  <Link
                    className="nav-link text-white text-uppercase"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </h4>
              </li>

              <li className="nav-item">
                <h4>
                  <Link
                    className="nav-link text-white text-uppercase"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </h4>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
