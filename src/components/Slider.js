
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "../styling/Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className='arrow'>

      <FaIcons.FaArrowAltCircleLeft
          className='left'
        onClick={prevSlide}
        />

      <FaIcons.FaArrowAltCircleRight
        className='right'
        onClick={nextSlide}
      />
      </div>

      {slides.map((url, idx) => {
        return (
          <div className={idx === current ? "slide active" : "slide"} key={idx}>
            {idx === current && (
              <img
                src={url}
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
