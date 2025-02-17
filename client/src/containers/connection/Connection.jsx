import React from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { images } from "../../constants";
import { Link, Outlet } from "react-router-dom";
import './connection.css'
import Footer from "../footer/Footer";
import Infos from './../../components/infos/Infos';


const Connection = () => {
  return (
    <>
      <div className="app__connection">
        <div className="app__connection-header">
          <div id="connection__infos" className="app__infos"
          >
            <div className="app__infos-left">
              <p style={{ color: "#000000" }}> fournisseurdp@gmail.com | </p>
              <p style={{ color: "#000000" }}>
                <FaPhoneAlt /> +241 77066605
              </p>
            </div>
            <Link to="/" className="app__navbar-logo">
              <img src={images.logo} alt="logo images" />
            </Link>
            <div className="app__infos-right connection-info-right">
              <FaMapMarkedAlt style={{ color: "#000000" }} />
              <p style={{ color: "#000000" }}>Libreville / Nzeng-Ayong</p>
            </div>
          </div>

        </div>

        <div className="connection-smallScreen">
        <Link to="/" className="app__navbar-logo">
              <img src={images.logo} alt="logo images" />
            </Link>
            <div className="app__infos-right">
              <FaMapMarkedAlt style={{ color: "#000000" }} />
              <p style={{ color: "#000000" }}>Libreville / Nzeng-Ayong</p>
            </div>
        </div>

        <div className="app__connection-container">
            <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Connection;
