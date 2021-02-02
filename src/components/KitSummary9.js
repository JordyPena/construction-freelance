import React from "react";
import Kits from "../kit-data/Roof-data";
import "../styling/Summary.css";
import { useHistory } from "react-router-dom";
function KitSummary9() {
  const history = useHistory();

  const redirect = () => {
    let path = "newPath";
    history.push("/contact");
  };

  return (
    <>
      <div className="summary-container">
        <span className="red"> {Kits[2].Title}</span>

        <span> {Kits[2].KitPrice}</span>

        <div className="top">
          <img src={Kits[2].Image} alt="building" />
        </div>

        <div className="bottom">
          <span> {Kits[2].Description}</span>

          <div className="material-container">
            Material Includes:
            {Kits[2].Materials.map((material) => {
              return (
                <div className="material-list">
                  {material.material1}
                  {material.material2}
                  {material.material3}
                  {material.material4}
                  {material.material5}
                  {material.material6}
                </div>
              );
            })}
          </div>

          <div className="features-container">
            Additional Features:
            {Kits[2].Features.map((feature, index) => {
              return (
                <div className="features-list">
                  {feature.feature1}
                  {feature.feature2}
                  {feature.feature3}
                  {feature.feature4}
                </div>
              );
            })}
          </div>
        </div>

        <div>*{Kits[0].Disclosure}</div>

        <div>
          <button onClick={() => redirect()} className="redirect-button">
            Purchase
          </button>
        </div>
      </div>
    </>
  );
}

export default KitSummary9;
