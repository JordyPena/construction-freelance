import React, { useState, useEffect } from "react";
import "../styling/Summary.css";
import { useHistory } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function KitSummary(props) {
  const history = useHistory();
 const [selectedImg, setSelectedImg] = useState(props.item.image)
 const [item, setItem] = useState()
 

  const redirect = () => {
    history.push("/contact");
  };

  console.log(props.item)
  return (
    <>
      <div className="summary-container">
        <span className="red"> {props.item.Title}</span>

        <span> {props.item.KitPrice}</span>

        <div className="top">
          <div className="image">
            <TransformWrapper>
              <TransformComponent>
                <img className="shrink" src={selectedImg} alt="blueprint" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>

        <div className="bottom">
          {/* if no blueprint don't render  */}
          {props.item.Blueprint && (
            <div className="bottom-row">
            {
              <img
                onClick={(e) => setSelectedImg(e.target.src)}
                className="tiny"
                src={props.item.image}
                alt="building"
              />
            }
            {
              <img
                onClick={(e) => setSelectedImg(e.target.src)}
                className="tiny"
                src={props.item.Blueprint}
                alt="building"
              />
            }
          </div>
          )}
          
          <span> {props.item.Description}</span>

          <div className="material-container">
            Material Includes:
            {props.item.Materials && props.item.Materials.map((material, idx) => {
              return (
                <div className="material-list" key={idx}>
                  {material.material1}
                  {material.material2}
                  {material.material3}
                  {material.material4}
                  {material.material5}
                  {material.material6}
                  {material.material7}
                  {material.material8}
                  {material.material9}
                </div>
              );
            })}
          </div>

          <div className="features-container">
            Labor Includes:
            {props.item.labors && props.item.labors.map((labor, index) => {
              return (
                <div className="features-list" key={index}>
                  {labor.labor1}
                  {labor.labor2}
                  {labor.labor3}
                  {labor.labor4}
                </div>
              );
            })}
          </div>

          <div className="features-container">
            Additional Features:
            {props.item.Features && props.item.Features.map((feature, index) => {
              return (
                <div className="features-list" key={index}>
                  {feature.feature1}
                  {feature.feature2}
                  {feature.feature3}
                  {feature.feature4}
                </div>
              );
            })}
          </div>
        </div>

        <div>*{props.item.Disclosure}</div>

        <div>
          <button onClick={() => redirect()} className="redirect-button">
            Purchase
          </button>
        </div>
      </div>
    </>
  );
}

export default KitSummary;
