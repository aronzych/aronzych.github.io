import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/gallery">Photo</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
