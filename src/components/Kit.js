import React from "react";
import { Link } from "react-router-dom";
import "../styling/Kit.css";
import Kits from "../kit-data/Kit-data";
import Roofs from "../kit-data/Roof-data";
import {useHistory} from 'react-router-dom'
function Kit() {

  const history = useHistory();

  const redirect = () => {
    let path = 'newPath';
    history.push('/contact');
  }
  return (
    <>
    <div className="main-contact">

      <button onClick={() => redirect()} className='main-button'>Contact Us</button>
    </div>

      <div className="kit-container">
        {Kits.map((kit, idx) => {
          return (
            <div className="kit-image">
              <Link to='/kit-summary'>
              
              <img src={kit.image} alt="building"/>
              </Link>
            
              
              <div className="kit-section">
                <span>{kit.Title} </span>
                <span>{kit.KitPrice}</span>
                <span>{kit.Description}</span>
                <button onClick={() => redirect()} className='redirect-button'>Contact Us</button>
              </div>
            </div>
          );
        })}

        {Roofs.map((roof, index) => {
          return (
            <div className="roof-image">
              <Link to='/roof-summary'>

              <img src={roof.Image} alt="roof" />
              </Link>
              <div className="roof-section">
                <span> {roof.Title}</span>
                <span>{roof.KitPrice}</span>
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

export default Kit;
