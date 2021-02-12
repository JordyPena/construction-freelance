import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Menu.css";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";


function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <button className="menu-bars" onClick={showSidebar}>
          <FaIcons.FaBars />
        </button>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaWindowClose />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <FaIcons.FaHome size={40} /> Home
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/contact">
              <IoIcons.IoIosContact size={40} /> Contact
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/kit-pricing">
              <FaIcons.FaRegMoneyBillAlt size={40} /> Kit Pricing
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/constructed-pricing">
              <FaIcons.FaRegMoneyBillAlt size={40} /> Constructed Pricing
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/special-pricing">
              <FaIcons.FaRegMoneyBillAlt size={40} /> Monthly Specials
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/about">
              <FaIcons.FaInfoCircle size={40} /> About
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/gallery">
              <FaIcons.FaImages size={40} /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
