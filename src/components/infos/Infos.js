import React from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./Infos.css";

const Infos = ({ color, colorLink, colorBorder }) => {
  return (
    <div
      className="app__infos "
      style={{ borderBottom: ` 1px solid ${colorBorder}` }}
    >
      <div className="app__infos-left">
        <p style={{ color: `${colorLink}` }}>fournisseur@gmail.com | </p>
        <p style={{ color: `${colorLink}` }}>
          <FaPhoneAlt /> +241 158523056
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
