import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div id="Navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "notactive")}
      >
        Home
      </NavLink>
      <NavLink
        to="/student"
        className={({ isActive }) => (isActive ? "active" : "notactive")}
      >
        Student
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "notactive")}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Nav;
