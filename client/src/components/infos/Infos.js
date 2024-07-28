import React from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./Infos.css";

const Infos = ({ color, colorLink, colorBorder }) => {
  return (
    <div
      className="app__infos "
    >
      <div className="app__infos-left">
        <p style={{ color: `${colorLink}` }}> fournisseurdp@gmail.com | </p>
        <p style={{ color: `${colorLink}` }}>
          <FaPhoneAlt /> +241 77066605
        </p>
      </div>
      <div className="app__infos-right">
        <FaMapMarkedAlt style={{ color: `${colorLink}` }} />
        <p style={{ color: `${colorLink}` }}>Libreville / Nzeng-Ayong</p>
      </div>
    </div>
  );
};

export default Infos;
