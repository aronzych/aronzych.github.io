import React from "react";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <div class="welcome">
      <p class="welcome__text">
        Hello.<span class="welcome__dot welcome__dot--1">.</span>
        <span class="welcome__dot welcome__dot--2">.</span>
      </p>
    </div>
  );
};

export default Welcome;
