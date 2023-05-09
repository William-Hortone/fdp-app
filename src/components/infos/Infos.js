import React from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./Infos.css";

const Infos = ({ color }) => {
  return (
    <div className="app__infos">
      <div className="app__infos-left">
        <p>Willhortone@gmail.com | </p>
        <p>
          <FaPhoneAlt /> +241 158523056
        </p>
      </div>
      <div className="app__infos-right">
        <FaMapMarkedAlt />
        <p>Libreville / Nzeng-Ayong</p>
      </div>
    </div>
  );
};

export default Infos;
