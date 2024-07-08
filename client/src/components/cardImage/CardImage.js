import React from "react";
import "./cardImage.css";

const CardImage = ({ linkImg }) => {
  return (
    <div className="app__CardImage">
      <div className="box">
        {/* <span /> */}
        <div class="circle"></div>

        <img className="card-image" src={linkImg} alt="Banner Image " />
      </div>
    </div>
  );
};

export default CardImage;
