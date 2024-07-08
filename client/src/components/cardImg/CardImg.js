import React from "react";
import "./cardImg.css";

const CardImg = ({ linkImg }) => {
  return (
    <div className="app__cardImg">
      <div className="app__cardImg-box">
        {/* <span /> */}
        <img className="card-img" src={linkImg} alt="Banner Image " />
      </div>
    </div>
  );
};

export default CardImg;

{
  /* <img width="960" height="905" src="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" alt="Banner Image"></img> */
}
