import Data from "../Gallery-data/Gallery-data";
import React from "react";
import "../styling/Gallery.css";
import Slider from "./Slider";
const Gallery = ({match}) => {
  return (
    <>
      <div className="gallery-container">
        {Data.map((slide) => {
          return (
            <>
              <h2 className="gallery-title">{slide.title}</h2>
              {slide.link && (
                <a className="slide-link" href={slide.link} target="_blank" rel="external">
                  Check out the Pumpkin Patch here
                </a>
              )}
              <p className="gallery-description">{slide.description}</p>

              <div className="slider-div">
                
                <Slider slides={slide.url} match={match}/>

              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
