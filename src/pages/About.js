import React from "react";
import "../styles/About.css";
import my_picture from "../images/my-picture.jpg";

const About = () => {
  return (
    <section class="about">
      <div class="description">
        <div class="description__img">
          <img src={my_picture} alt="my_picture" />
        </div>
        <div class="description__text">
          My name is Aron Zych.
          <br />I love to create. Web development, video, photo.
          <div class="skills">
            <div class="skills__skill">
              HTML
              <i class="skills__icon fab fa-html5"></i>
            </div>
            <div class="skills__skill">
              CSS
              <i class="skills__icon fab fa-css3-alt"></i>
            </div>
            <div class="skills__skill">
              Javascript
              <i class="skills__icon fab fa-js"></i>
            </div>
            <div class="skills__skill">
              React
              <i class="skills__icon fab fa-react"></i>
            </div>
            <div class="skills__skill">
              Node
              <i class="skills__icon fab fa-node-js"></i>
            </div>
            <div class="skills__skill">
              SASS
              <i class="skills__icon fab fa-sass"></i>
            </div>
            <div class="skills__skill">
              Git
              <i class="skills__icon fab fa-git"></i>
            </div>
            <div class="skills__skill">
              PS, PR
              <i class="skills__icon fab fa-adobe"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
