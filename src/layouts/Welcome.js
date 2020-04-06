import React from "react";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <p className="welcome__text">
        Hello.<span className="welcome__dot welcome__dot--1">.</span>
        <span className="welcome__dot welcome__dot--2">.</span>
      </p>
    </div>
  );
};

export default Welcome;
