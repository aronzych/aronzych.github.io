import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Main.css";
import Welcome from "../layouts/Welcome";

const Main = (props) => {
  props.load();

  return (
    <>
      {props.firstLoad ? <Welcome /> : null}
      <section className="main">
        <div className="main__contact">aron.zych@yahoo.com</div>
        <div className="main__name">Aron Zych</div>
        <div className="main__about">Developer, filmmaker, traveler...</div>
        <div className="main__menu">
          <NavLink to="/about">
            <button className="main__button main__button--openAbout">
              About
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className="main__button main__button--openPortfolio">
              Portfolio
            </button>
          </NavLink>
        </div>
        <div className="main__social">
          <a
            rel="noopener noreferrer"
            href="http://www.facebook.com/aron.zych"
            target="_blank"
            className="main__icon main__icon--facebook fab fa-facebook-f"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            href="http://www.instagram.com/aronzych"
            target="_blank"
            className="main__icon main__icon--instagram fab fa-instagram"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/aronzych"
            target="_blank"
            className="main__icon main__icon--github fab fa-github"
          >
            {" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default Main;
