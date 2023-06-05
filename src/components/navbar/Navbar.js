import React, { useState, useEffect } from "react";
import "./navbar.css";
import images from "../../constants/images";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Navbar = ({ colorLink, colorIcon, colorBorder }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isWidthLessThan1000, setIsWidthLessThan1000] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { body } = document;
      setIsWidthLessThan1000(body.clientWidth < 1050);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // let bodyWidthView = document.body.style.width;

  // if (bodyWidthView <= 800px)
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#A90A0A" : "",
    };
  };
  console.log("the body width is ", isWidthLessThan1000);
  return (
    <div
      className="app__navbar "
      style={{ borderBottom: ` 1px solid ${colorBorder}` }}
    >
      <div className="app__navbar-burger-btm">
        <FaBars
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      </div>
      {/* <button
        className="app__navbar-burger-btm"
        onClick={() => setToggleMenu(true)}
      >
        click
      </button> */}
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo images" />
      </div>
      <ul className="app__navbar-list">
        <li style={{ color: `${colorLink}` }}>
          <NavLink className="link" style={navLinkStyle} to="/">
            Accueil
          </NavLink>
        </li>
        <li style={{ color: `${colorLink}` }}>
          <NavLink className="link" style={navLinkStyle} to="/about">
            A propos
          </NavLink>
        </li>
        <li style={{ color: `${colorLink}` }}>
          <NavLink className="link" style={navLinkStyle} to="/products">
            Produits
          </NavLink>
        </li>
        <li style={{ color: `${colorLink}` }}>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-icons">
        <a href="https://www.facebook.com/Fournisseurdeproximite">
          <FaFacebookF
            color={isWidthLessThan1000 ? `${colorIcon}` : `${colorLink}`}
            fontSize={20}
          />
        </a>
        <a target="blank" href="https://wa.me/24177066605">
          <FaWhatsapp
            color={isWidthLessThan1000 ? `${colorIcon}` : `${colorLink}`}
            fontSize={20}
          />
        </a>
      </div>

      {toggleMenu && (
        <div className="app__navbar-smallScreen-overlay slide-right">
          <div className="overlay-header">
            <FaTimes
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            {/* <p onClick={() => setToggleMenu(false)}>close X</p> */}
          </div>
          <ul className="app__navbar-list-overlay">
            <li>
              <NavLink className="link" style={navLinkStyle} to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="link" style={navLinkStyle} to="/about">
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink className="link" style={navLinkStyle} to="/products">
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#contact">
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
