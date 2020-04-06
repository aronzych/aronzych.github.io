import React from "react";
import "../styles/Contact.css";
import contactPicture from "../images/contact-picture.jpg";

const Contact = () => {
  const handleClick = () => {
    window.open("mailto:aron.zych@yahoo.com");
  };

  return (
    <section className="contact">
      <header className="contact__header">
        <img src={contactPicture} alt="header" />
      </header>

      <span onClick={handleClick} className="contact__email">
        aron.zych@yahoo.com
      </span>

      <div className="contact__social">
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
  );
};

export default Contact;
