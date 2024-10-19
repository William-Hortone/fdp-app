import React, { useContext, useEffect, useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTimes,
  FaWhatsapp,
  FaUserAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import "./navbar.css";
import { UserContext } from "../../hooks/context/UserContext";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BASE_URL } from "../../hooks/config";
import axios from "axios";
import CartItem from "../cart/CartItem";
import Cart from "../cart/Cart";
import BlurEffect from "../BlurEffect";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "var(--color-red)",
    color: "white",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "10px",
  borderRadius: "50%",
}));

const Navbar = ({ colorLink, colorIcon,borderColor, colorBorder, cartColor }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [userId, setUserId] = useState();
  const [items, setItems] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  const [isWidthLessThan1000, setIsWidthLessThan1000] = useState(false);

  const { handleLogout, userInfo, userToken } = useContext(UserContext);

  // Check window width on resize
  useEffect(() => {
    const handleResize = () => {
      const { body } = document;
      setIsWidthLessThan1000(body.clientWidth < 1051);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setUserId(userInfo?.id);
  }, [userInfo]);

  // Fetch user data and update cart badge
  const handleGetUser = async () => {
    if (userId) {
      try {
        const response = await axios.get(`${BASE_URL}/users/getUser/${userId}`);
        setBadgeNumber(response.data.cart?.length || 0);
        setItems(response.data?.cart || []);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

 
  // Handle cart update when cartUpdated changes
  useEffect(() => {
    if (userId) {
      handleGetUser();
      // setCartUpdated(false);
    }
  }, [userId]);

  // useEffect(() => {
  //   console.log("Cart", items);
  // }, [items]);


  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#A90A0A" : "",
  });

  const handleViewCart =()=>{
    setShowCart(true)
    setCartUpdated(true); 
    setShowBlur(true); 

  }
  return (
    <>
    <div
      className="app__navbar"
      style={{ borderBottom: `1px solid ${colorBorder}` }}
    >
      <div className="app__navbar-burger-btm">
        <FaBars
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      </div>

      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
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
        {userToken && (
          <StyledIconButton
            aria-label="cart"
            onClick={handleViewCart}
          >
            <StyledBadge badgeContent={badgeNumber} color="secondary">
              <ShoppingCartIcon style={isWidthLessThan1000 ?{ color: 'white' }: { color: cartColor }} />
            </StyledBadge>
          </StyledIconButton>
        )}

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
          <>
            <Link className="btn-connection btn-login" to="/connection/login" style={{border:`1px solid ${colorBorder}`, color: colorLink}}>
              Login
            </Link>
            <Link

              className="btn-connection btn-register"
              to="/connection/signup"
            >
              Sign Up
            </Link>
          </>
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

      {/* Navbar on small screen */}
      {toggleMenu && (
        <div className="app__navbar-smallScreen-overlay slide-right">
          <div className="overlay-header">
            <FaTimes
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            {userInfo && (
              <div className="display-user">
                <FaUserAlt color="black" />
                <p>{userInfo.username}</p>
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
            <>
              <Link className="btn-connection" to="/connection/login">
                Login
              </Link>
              <Link
                className="btn-connection btn-register"
                to="/connection/signup"
              >
                Sign Up
              </Link>
            </>
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

      {showCart &&       <Cart showCart={showCart} setShowCart={setShowCart} cartUpdated={cartUpdated} setCartUpdated={setCartUpdated} />

        
        }
        
    </div>

    <BlurEffect showBlur={showCart} /> 
    </>
  );
};

export default Navbar;
