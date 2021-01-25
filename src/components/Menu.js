import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Menu.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

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
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <AiIcons.AiFillHome size={40} /> Home
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
            <Link to="/monthly-specials">
              <MdIcons.MdMoneyOff size={40} /> Monthly Specials
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/about">
              <RiIcons.RiInformationFill size={40} /> About
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/gallery">
              <BsIcons.BsImages size={40} /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
