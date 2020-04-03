import React from "react";
import "../styles/Gallery.css";
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

const Gallery = () => {
  return (
    <section class="gallery">
      <div class="gallery__img">
        <img src={img1} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img2} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img3} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img4} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img5} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img6} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img7} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img8} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img9} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img10} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img11} alt="img" />
      </div>
      <div class="gallery__img">
        <img src={img12} alt="img" />
      </div>
    </section>
  );
};

export default Gallery;
