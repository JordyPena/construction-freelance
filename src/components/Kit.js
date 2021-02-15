import React from "react";
import { Link } from "react-router-dom";
import "../styling/Kit.css";
import { useHistory } from "react-router-dom";

function Kit(props) {
  const history = useHistory();

  const redirect = () => {
    history.push("/contact");
  };
  console.log(props.kits);
  return (
    <>
      <div className="main-contact">
        <button onClick={() => redirect()} className="main-button">
          Contact Us
        </button>
      </div>

      <div className="kit-container">
        <div className="img-container">
          {props.kits.map((kit) => {
            return (
              <div className="kit-image">
                {props.match.path === "/constructed-pricing" ? (
                  <Link to={`constructed-summary/${kit.id}`}>
                    <img class="image-size" src={kit.image} alt="building" />
                  </Link>
                ) : props.match.path === "/kit-pricing" ? (
                  <Link to={`kit-summary/${kit.id}`}>
                    <img class="image-size" src={kit.image} alt="building" />
                  </Link>
                ) : (
                  <Link to={`special-summary/${kit.id}`}>
                    <img class="image-size" src={kit.image} alt="building" />
                  </Link>
                )}

                <div className="kit-section">
                  <span>{kit.Title} </span>
                  <span className="kit-price">{kit.KitPrice}</span>
                  <span className="kit-description">{kit.Description}</span>
                  <button
                    onClick={() => redirect()}
                    className="redirect-button"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="img-container">
          {props.roofs &&
            props.roofs.map((roof) => {
              return (
                <div className="kit-image">
                  {props.match.path === "/constructed-pricing" ? (
                    <Link to={`constructedRoof-summary/${roof.id}`}>
                      <img className="image-size" src={roof.image} alt="roof" />
                    </Link>
                  ) : (
                    <Link to={`roof-summary/${roof.id}`}>
                      <img className="image-size" src={roof.image} alt="roof" />
                    </Link>
                  )}
                  <div className="roof-section">
                    <span className="roof-title"> {roof.Title}</span>
                    <span className="roof-price">{roof.KitPrice}</span>
                    <span className="kit-description">{roof.Description}</span>
                    <button
                      onClick={() => redirect()}
                      className="redirect-button"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Kit;
