import React, { useContext } from "react";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./Infos.css";
import { UserContext } from "../../hooks/context/UserContext";
import { FaUserAlt } from "react-icons/fa"; 

const Infos = ({ color, colorLink, colorBorder }) => {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="app__infos " style={{ borderBottom: `1px solid ${colorBorder}`}}>
      <div className="app__infos-left">
        <p style={{ color: `${colorLink}` }}> fournisseurdp@gmail.com | </p>
        <p style={{ color: `${colorLink}` }}>
          <FaPhoneAlt /> +241 77066605
        </p>
      </div>

      {/* Display username */}
      {userInfo && (
        <div className="app__infos-right">
          <FaUserAlt color="#a90a0a" />
          <p style={{ color: `${colorLink}` }}>
          
            {userInfo ? ` Hey ${userInfo.username} ` : ""}
          </p>
        </div>
      )}
      <div className="app__infos-right">
        <FaMapMarkedAlt style={{ color: `${colorLink}` }} />
        <p style={{ color: `${colorLink}` }}>Libreville / Nzeng-Ayong</p>
      </div>
    </div>
  );
};

export default Infos;
