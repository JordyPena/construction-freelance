import React from "react";
import * as Faicons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import "../styling/Header.css";

function Header() {
  return (
    <>
      <div className="header-column">
        <div className="header-row">
          <div className="header-left">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='logo'/>
           
          </div>

          <div className="contact-right">
            <span>971-218-5250</span>
            <span>CCB #207657</span>
            <span>WA #STRAUCL836CL</span>
            <span>
              <Faicons.FaFacebookF size={30} />
            </span>
            <span>
              <MdIcons.MdEmail size={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
