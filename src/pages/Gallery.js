import React from "react";
import "../styles/Gallery.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const imgsList = imgs.map((img, id) => {
  return (
    <div key={id} className="gallery__img">
      <LazyLoadImage alt="gallery-img" effect="blur" src={img} />
    </div>
  );
});

const Gallery = () => {
  return <section className="gallery">{imgsList}</section>;
};
export default Gallery;
