import React from "react";
import "./cardCategory.css";
import { images } from "../../constants";

const CardCategory = ({ title, img }) => {
  return (
    <div className="app__cardCategory">
      <div className="app__cardCategory-img">
        <img src={img} alt="sport images" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CardCategory;
