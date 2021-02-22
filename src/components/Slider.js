import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import "../styling/Slider.css";

const Slider = ({ slides, match }) => {
  const { path } = match;

  const [currentPath] = useState(path);
  const [index, setIndex] = useState(0);
  const length = slides.length;
  const gallery = useRef();
  const gallerySecond = useRef();

  useEffect(() => {
    if (currentPath === "/") {
      gallery.current.style = `background-image:url('${slides[index]}')`;

    } else if (currentPath === "/gallery") {

      gallerySecond.current.style = `background-image:url('${slides[index]}')`;
    }
  });

  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <section
        id={`${currentPath === "/" ? "slider" : "gallery-slider"}`}
        className={`${currentPath === "/" ? "slider" : "gallery-slider"}`}
      >
        <div className={`${currentPath === "/" ? "arrow" : "gallery-arrow"}`}>
          <FaIcons.FaArrowAltCircleLeft
            className={`${currentPath === "/" ? "left" : "gallery-left"}`}
            onClick={prevSlide}
          />

          <FaIcons.FaArrowAltCircleRight
            className={`${currentPath === "/" ? "right" : "gallery-right"}`}
            onClick={nextSlide}
          />
        </div>
      </section>
      <div
        className={`${currentPath === "/" ? "gallery" : "gallerySecond"}`}
        ref={currentPath === "/" ? gallery : gallerySecond}
      ></div>
    </>
  );
};

export default Slider;
