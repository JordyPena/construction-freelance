import React, { useState, useEffect } from "react";
import Kits from "../kit-data/Kit-data";
import "../styling/Summary.css";
import { useHistory } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function KitSummary1({ match }) {
  const history = useHistory();
  const [kitImg, setKitImg] = useState();

  const [title, setTitle] = useState();
  const [kitPrice, setKitPrice] = useState();
  const [description, setDescription] = useState();
  const [materials, setMaterials] = useState();
  const [features, setFeatures] = useState();
  const [disclosure, setDisclosure] = useState();
  const [blueprint, setBlueprint] = useState();
  const [selectedImg, setSelectedImg] = useState()

  const redirect = () => {
    history.push("/contact");
  };

  

  useEffect(() => {
    const found = Kits.find((kit) => {
      return kit.id === parseInt(match.params.kitid);
    });

   
    setSelectedImg(found.image)
    setKitImg(found.image);
    setTitle(found.Title);
    setKitPrice(found.KitPrice);
    setMaterials(found.Materials);
    setFeatures(found.Features);
    setDisclosure(found.Disclosure);
    setBlueprint(found.Blueprint);
  }, []);

  return (
    <>
      <div className="summary-container">
        <span className="red"> {title}</span>

        <span> {kitPrice}</span>

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
          <div className="bottom-row">
            {
              <img
                onClick={(e) => setSelectedImg(e.target.src)}
                className="tiny"
                src={kitImg}
                alt="building"
              />
            }
            {
              <img
                onClick={(e) => setSelectedImg(e.target.src)}
                className="tiny"
                src={blueprint}
                alt="building"
              />
            }
          </div>
          <span> {description}</span>

          <div className="material-container">
            Material Includes:
            {materials && materials.map((material, idx) => {
              return (
                <div className="material-list" key={idx}>
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
            {features && features.map((feature, index) => {
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

        <div>*{disclosure}</div>

        <div>
          <button onClick={() => redirect()} className="redirect-button">
            Purchase
          </button>
        </div>
      </div>
    </>
  );
}

export default KitSummary1;
