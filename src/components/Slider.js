import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "../styling/Slider.css";

const Slider = ({ slides, match }) => {
  const {path} = match;
  const [current, setCurrent] = useState(0);
  const [currentPath, setCurrentPath] = useState(path)
  const length = slides.length;
  console.log(match)
 
  console.log('this is path', path)
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
    <section className={`${(currentPath === '/') ? "slider" : "gallery-slider" }`}>
      <div className={`${(currentPath === '/') ? "arrow" : "gallery-arrow" }`}>

      <FaIcons.FaArrowAltCircleLeft
          className={`${(currentPath === '/') ? "left" : "gallery-left" }`}
        onClick={prevSlide}
        />

      <FaIcons.FaArrowAltCircleRight
        className={`${(currentPath === '/') ? "right" : "gallery-right" }`}
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
