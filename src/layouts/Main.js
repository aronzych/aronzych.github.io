import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Main.css";
import Welcome from "../layouts/Welcome";

const Main = (props) => {
  props.load();

  return (
    <>
      {props.firstLoad ? <Welcome /> : null}
      <section class="main">
        <div class="main__contact">aron.zych@yahoo.com</div>
        <div class="main__name">Aron Zych</div>
        <div class="main__about">Developer, filmmaker, traveler...</div>
        <div class="main__menu">
          <NavLink to="/about">
            <button class="main__button main__button--openAbout">About</button>
          </NavLink>
          <NavLink to="/projects">
            <button class="main__button main__button--openPortfolio">
              Portfolio
            </button>
          </NavLink>
        </div>
        <div class="main__social">
          <a
            rel="noopener noreferrer"
            href="http://www.facebook.com/aron.zych"
            target="_blank"
            class="main__icon main__icon--facebook fab fa-facebook-f"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            href="http://www.instagram.com/aronzych"
            target="_blank"
            class="main__icon main__icon--instagram fab fa-instagram"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/aronzych"
            target="_blank"
            class="main__icon main__icon--github fab fa-github"
          >
            {" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default Main;
