import React from "react";
import Card from "../components/Card";
import "../styles/Projects.css";
import todo from "../images/todo.jpg";
import hash from "../images/hash.jpg";
import weather from "../images/weather.jpg";
import portfolio from "../images/portfolio.jpg";
import chinabar from "../images/chinabar.jpg";
import flexbox from "../images/flexbox.jpg";

const data = [
  {
    project: "Todos",
    stack: "React, Bootstrap",
    description:
      "Todo list with important, dead-line and complete date. Created with react and bootstrap.",
    website: "https://aronzych.github.io/react-todo/",
    github: "https://github.com/aronzych/react-todo",
    image: todo,
  },
  {
    project: "#Generator",
    stack: "JS",
    description:
      "Javascript app. User can generate hashtags list. All hashtags are unique in each generation. After reset, hashtags return to array. Some categories and two languages of hashtags to choose.",
    website: "https://aronzych.github.io/hashtags-generator/",
    github: "https://github.com/aronzych/hashtags-generator",
    image: hash,
  },
  {
    project: "Weather App",
    stack: "JS",
    description: "Simple weather app using API",
    website: "https://aronzych.github.io/weather-app/",
    github: "https://github.com/aronzych/weather-app",
    image: weather,
  },
  {
    project: "My old portfolio",
    stack: "HTML, CSS, JS",
    description: "My old portfolio. Responsive.",
    website: "https://aronzych.github.io/my-old-portfolio/",
    github: "https://github.com/aronzych/my-old-portfolio",
    image: portfolio,
  },
  {
    project: "HTML template",
    stack: "HTML, CSS",
    description: "HTML template based on PSD project. Responsive with flexbox.",
    website: "https://aronzych.github.io/photography-portfolio/",
    github: "https://github.com/aronzych/photography-portfolio",
    image: flexbox,
  },
  {
    project: "Wordpress",
    stack: "Wordpress, Elementor",
    description:
      "Website for small restaurant. Based on Wordpress, designed in Elementor.",
    website: "https://chinabarczarnkow.pl/",
    github: "https://chinabarczarnkow.pl/",
    image: chinabar,
  },
];

const projectList = data.map((el) => (
  <Card
    key={el.project}
    project={el.project}
    stack={el.stack}
    description={el.description}
    webiste={el.website}
    github={el.github}
    image={el.image}
  />
));

const Projects = () => {
  return <section className="projects">{projectList}</section>;
};

export default Projects;
