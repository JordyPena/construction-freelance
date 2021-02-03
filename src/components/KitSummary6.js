import React, {useState} from "react";
import Kits from "../kit-data/Kit-data";
import "../styling/Summary.css";
import { useHistory } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function KitSummary6() {
  const history = useHistory();
  const [currentImg, setCurrentImg] = useState(Kits[5].image)

  const redirect = () => {

    history.push("/contact");
  };

  return (
    <>
      <div className="summary-container">
        <span className="red"> {Kits[5].Title}</span>

        <span> {Kits[5].KitPrice}</span>

        <div className="top">
        <div className="image">
            <TransformWrapper>
              <TransformComponent>
                <img className="shrink" src={currentImg} alt="blueprint" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>

        <div className="bottom">
        <div className="bottom-row">
          {<img onClick={(e) => setCurrentImg(e.target.src)} className='tiny' src={Kits[5].image} alt='building'/>}
         {<img onClick={(e) => setCurrentImg(e.target.src)} className='tiny' src={Kits[5].Blueprint} alt='building'/>}
          </div>
          <span> {Kits[5].Description}</span>

          <div className="material-container">
            Material Includes:
            {Kits[5].Materials.map((material) => {
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
            {Kits[5].Features.map((feature, index) => {
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

export default KitSummary6;
