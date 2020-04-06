import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.image} alt="project-img"></img>
      </div>
      <div className="card__description">
        <h1>{props.project}</h1>
        <p>
          <b>Stack: {props.stack}</b>
        </p>
        <p>{props.description}</p>
      </div>
      <div className="card__buttons">
        <span>
          <a
            href={props.webiste}
            target="_blank"
            rel="noopener noreferrer"
            className="card__button card__button--website"
          >
            Webiste
          </a>
        </span>
        <span>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card__button card__button--github"
          >
            Github
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
