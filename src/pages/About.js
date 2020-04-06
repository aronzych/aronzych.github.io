import React from "react";
import "../styles/About.css";
import myPicture from "../images/my-picture.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="description">
        <div className="description__img">
          <img src={myPicture} alt="my_picture" />
        </div>
        <div className="description__text">
          <p>Hello, my name is Aron Zych.</p>
          <p>I love to create. Web development, video, photo.</p>

          <div className="skills">
            <div className="skills__skill">
              HTML
              <i className="skills__icon fab fa-html5"></i>
            </div>
            <div className="skills__skill">
              CSS
              <i className="skills__icon fab fa-css3-alt"></i>
            </div>
            <div className="skills__skill">
              Javascript
              <i className="skills__icon fab fa-js"></i>
            </div>
            <div className="skills__skill">
              React
              <i className="skills__icon fab fa-react"></i>
            </div>
            {/* <div className="skills__skill">
              Node
              <i className="skills__icon fab fa-node-js"></i>
            </div> */}
            <div className="skills__skill">
              SASS
              <i className="skills__icon fab fa-sass"></i>
            </div>
            <div className="skills__skill">
              Git
              <i className="skills__icon fab fa-git"></i>
            </div>
            <div className="skills__skill">
              Bootstrap
              <i className="skills__icon fab fa-bootstrap"></i>
            </div>
          </div>

          <p>...</p>
          <div className="skills">
            <div className="skills__skill">
              IG Ads
              <i className="skills__icon skills__icon--small fab fa-instagram"></i>
            </div>
            <div className="skills__skill">
              Wordpress
              <i className="skills__icon skills__icon--small fab fa-wordpress"></i>
            </div>
            <div className="skills__skill">
              PS, PR
              <i className="skills__icon skills__icon--small fab fa-adobe"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
