import Data from "../Gallery-data/Gallery-data";
import React, { useState } from "react";
import "../styling/Gallery.css";
import Slider from "./Slider"
const Gallery = () => {
  
  return (
    <>
      <div>
        {Data.map((slide) => {
          return (
            <>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              {slide.link && (
                <a className="slide-link" href={slide.link} target="_blank">
                  Pumpkin patch
                </a>
              )}
           

             <Slider slides={slide.url}/>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
