import React, { useState } from "react";
import "./navbar.css";
import images from "../../constants/images";
import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#A90A0A" : "#fff",
    };
  };

  return (
    <div className="app__navbar">
      <button
        className="app__navbar-burger-btm"
        onClick={() => setToggleMenu(true)}
      >
        click
      </button>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo images" />
      </div>
      <ul className="app__navbar-list">
        <li>
          <NavLink className="link" style={navLinkStyle} to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" style={navLinkStyle} to="/products">
            Produits
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="app__navbar-icons">{/* <FaBars /> */}</div>

      {toggleMenu && (
        <div className="app__navbar-smallScreen-overlay slide-right">
          <div className="overlay-header">
            <p onClick={() => setToggleMenu(false)}>close X</p>
          </div>
          <ul className="app__navbar-list-overlay">
            <li>
              <NavLink className="link" style={navLinkStyle} to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="">
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink className="link" style={navLinkStyle} to="/products">
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="app__navbar-icons">{/* <FaBars /> */}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
