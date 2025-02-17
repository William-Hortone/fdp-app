import React from "react";
import { ButtonBorder } from "../../components";
import "./banner.css";

const Banner = () => {
  return (
    <div className="app__banner">
      <div className="app__banner-container">
        <p className="p__cormorant">Promotion de 10%</p>
        <h2>FITNESS & YOGA</h2>
        <ButtonBorder color="#fff" />
      </div>
    </div>
  );
};

export default Banner;
