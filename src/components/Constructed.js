import React from "react";
import { Link } from "react-router-dom";
import "../styling/Kit.css";
import Kits from "../kit-data/Kit-data";
import Roofs from "../kit-data/Roof-data";
import {useHistory} from 'react-router-dom'

function Constructed() {

  const history = useHistory();

  const redirect = () => {

    history.push('/contact');
  }
  return (
    <>
    <div className="main-contact">

      <button onClick={() => redirect()} className='main-button'>Request a Site Visit</button>
    </div>

      <div className="kit-container">
        <div className='img-container'>

        {Kits.map((kit) => {
          return (
            <div className="kit-image">
              {console.log(kit.Url)}
              <Link to={kit.constructedUrl}>
              
              <img class='image-size' src={kit.image} alt="building"/>
              </Link>
            
              
              <div className="kit-section">
                <span>{kit.constructedTitle} </span>
                <span>{kit.ConstructedPrice}</span>
                <span>{kit.Description}</span>
                <button onClick={() => redirect()} className='redirect-button'>Contact Us</button>
              </div>
            </div>
          );
        })}
        </div>

        {Roofs.map((roof) => {
          return (
            <div className="roof-image">
              <Link to={roof.constructedUrl}>

              <img class='image-size' src={roof.Image} alt="roof" />
              </Link>
              <div className="roof-section">
                <span> {roof.constructedTitle}</span>
                <span>{roof.ConstructedPrice}</span>
                <span> {roof.Description}</span>
                <button onClick={() => redirect()} className='redirect-button'>Contact Us</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Constructed;
