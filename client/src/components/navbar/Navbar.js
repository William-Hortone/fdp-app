import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaFacebookF, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import "./navbar.css";
import { UserContext } from "../../hooks/context/UserContext";
import { FaUserAlt } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { BASE_URL}  from


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'var(--color-red)',
    color: 'white',
  },
}));

// Style for the icon background
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: '10px',
  borderRadius: '50%',
  '&:hover': {
    // Add hover effects if needed
  },
}));

const Navbar = ({ colorLink, colorIcon, colorBorder }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isWidthLessThan1000, setIsWidthLessThan1000] = useState(false);

  const { handleLogout, userInfo, userToken } = useContext(UserContext);

  // Check window width on resize
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

  // Check if the cart has items and display badge
  useEffect(() => {
    if (userInfo?.cart?.length > 0) {
      setShowBadge(true);
    } else {
      setShowBadge(false);
    }
  }, [userInfo]);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#A90A0A" : "",
    };
  };

  useEffect( () =>{
    console.log('the info', 
      
    )
  },[])

  const handleGetuser = async() =>{
    // const response = await axios.get(`${BASE_URL}/${}`)
 }

  return (
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
          <StyledIconButton aria-label="cart">
            {showBadge && (
              <StyledBadge badgeContent={3} color="secondary">
                <ShoppingCartIcon style={{ color: 'black' }} />
              </StyledBadge>
            )}
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

            {userInfo && (
              <div className="display-user">
                <FaUserAlt color="black" />
                <p>{userInfo ? `${userInfo.username}` : ""}</p>
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
      )}
    </div>
  );
};

export default Navbar;