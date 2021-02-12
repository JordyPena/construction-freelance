import Data from "../Gallery-data/Gallery-data";
import React from "react";
import "../styling/Slider.css";
import Slider from "./Slider"
const Gallery = () => {
  
  return (
    <>
      <div>
        {Data.map((slide) => {
          return (
            <>
              <h2 className="gallery-title">{slide.title}</h2>
              <p className="gallery-description">{slide.description}</p>
              {slide.link && (
                <a className="slide-link" href={slide.link} target="_blank">
                  Pumpkin patch
                </a>
              )}
           

             <Slider slides={slide.url} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
