import Data from "../slider-data/Slider-data";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "../styling/Slider.css";
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const moveSlide = ({ target }) => {
    const newSlideIndex = target.classList.contains("left")
      ? current - 1
      : current + 1;

    current(newSlideIndex);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaIcons.FaArrowAltCircleLeft
        className={`left-arrow`}
        onClick={moveSlide}
      />

      <FaIcons.FaArrowAltCircleRight
        className={`right-arrow`}
        onClick={moveSlide}
      />

      {Data.map((slide, idx) => {
        return (
          <div className={idx === current ? "slide active" : "slide"} key={idx}>
            {idx === current && (
              <img
                src={slide.image}
                alt="construction-building"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
