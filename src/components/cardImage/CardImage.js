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

{
  /* <img width="960" height="905" src="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" alt="Banner Image"></img> */
}
