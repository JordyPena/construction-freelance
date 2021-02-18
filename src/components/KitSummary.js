import React, { useState } from "react";
import "../styling/Summary.css";
import { useHistory } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function KitSummary(props) {
  const history = useHistory();
  const [selectedImg, setSelectedImg] = useState(props.item.image);
console.log(props.item)
  const redirect = () => {
    history.push("/contact");
  };
  return (
    <>
      <div className="summary-container">
        <div className="top">
          <div>
            <span className="red"> {props.item.Title}</span>
          </div>
          <div className="pricing">
          <span> {props.item.KitPrice}</span>
          </div>
          <div className="kit-image">
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
            {props.item.Materials &&
              props.item.Materials.map((material, idx) => {
                return (
                  <div className="material-list" key={idx}>
                    {material.material}
                  </div>
                );
              })}
          </div>

          <div className="features-container">
            Labor Includes:
            {props.item.labors &&
              props.item.labors.map((labor, index) => {
                return (
                  <div className="features-list" key={index}>
                    {labor.labor}
                  </div>
                );
              })}
          </div>

          <div className="features-container">
            Additional Features:
            {props.item.Features &&
              props.item.Features.map((feature, index) => {
                return (
                  <div className="features-list" key={index}>
                    {feature.feature}
                  </div>
                );
              })}
          </div>

          <div>*{props.item.Disclosure}</div>

          <div>
          <button onClick={() => redirect()} className="redirect-button">
            Purchase
          </button>
        </div>
        </div>

       

       
      </div>
    </>
  );
}

export default KitSummary;
