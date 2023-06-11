import React from "react";
import "./banner.css";
import { images } from "../../constants";
import { ButtonBorder } from "../../components";

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
