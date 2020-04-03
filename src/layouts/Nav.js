import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li class="nav__item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li class="nav__item">
          <NavLink to="/gallery">Photo</NavLink>
        </li>
        <li class="nav__item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
