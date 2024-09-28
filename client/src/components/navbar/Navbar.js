import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaFacebookF, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import "./navbar.css";
import { UserContext } from "../../hooks/context/UserContext";
import { FaUserAlt } from "react-icons/fa"; 


const Navbar = ({ colorLink, colorIcon, colorBorder }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isWidthLessThan1000, setIsWidthLessThan1000] = useState(false);

  const { handleLogout, userInfo, userToken } = useContext(UserContext);

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
        <a
          className="social-icon"
          href="https://www.facebook.com/Fournisseurdeproximite"
        >
          <FaFacebookF
            color={isWidthLessThan1000 ? `${colorIcon}` : `${colorLink}`}
            fontSize={20}
          />
        </a>
        <a
          className="social-icon"
          target="blank"
          href="https://wa.me/24177066605"
        >
          <FaWhatsapp
            color={isWidthLessThan1000 ? `${colorIcon}` : `${colorLink}`}
            fontSize={20}
          />
        </a>
        {!userToken && (
          <Link className="btn-connection" to="/connection/login">
            Login
          </Link>
        )}
        {!userToken && (
          <Link className="btn-connection btn-register" to="/connection/signup">
            Sign Up
          </Link>
        )}
        {userToken && (
          <button
            className="btn-connection btn-register"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
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
            {userInfo &&

            (

          <div className="display-user">
          <FaUserAlt color="black" />
            <p>{userInfo? `${userInfo.username}` : ''}</p>
          </div>
            )}
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
          {!userToken && (
            <Link className="btn-connection" to="/connection/login">
              Login
            </Link>
          )}

          {!userToken && (
            <Link
              className="btn-connection btn-register"
              to="/connection/signup"
            >
              Sign Up
            </Link>
          )}

          {userToken && (
            <button
              className="btn-connection btn-register"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
