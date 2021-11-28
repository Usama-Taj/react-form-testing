import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div className="container-lg">
        <NavLink to="/" className="navbar-brand">
          React Forms
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/small-form"
                activeclassname="nav-active"
                className="nav-link"
              >
                Small
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/medium-form"
                activeclassname="nav-active"
                className="nav-link"
              >
                Medium
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/big-form"
                activeclassname="nav-active"
                className="nav-link"
              >
                Big
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/redux-form"
                activeclassname="nav-active"
                className="nav-link"
              >
                Redux Form
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
