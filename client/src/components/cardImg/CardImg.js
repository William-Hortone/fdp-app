import React from "react";
import "./cardImg.css";

const CardImg = ({ img }) => {
  return (
    <div className="app__cardImg">
      <div className="app__cardImg-box">
        <img className="card-img" src={img} alt="Banner " />
      </div>
    </div>
  );
};

export default CardImg;
