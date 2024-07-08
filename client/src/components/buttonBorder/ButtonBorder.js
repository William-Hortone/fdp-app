import React from "react";
import "./buttonBorder.css";

const ButtonBorder = ({ color }) => {
  return (
    <div style={{ border: `2px solid ${color}` }} className="app__buttonBorder">
      <div className="app__buttonBorder-box-one box-btn">
        <p style={{ color: `${color}` }}> Voir Plus</p>
      </div>
      <div className="app__buttonBorder-box-tow box-btn">
        <p>Voir plus</p>
      </div>
    </div>
  );
};

export default ButtonBorder;
