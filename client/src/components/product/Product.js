import React from "react";
import "./product.css";

const Product = ({ imgOne, imgTow }) => {
  return (
    <div className="app__product">
      <div className="app__product-box">
        {/* <span /> */}
        <div className="hot-article">
          <p>HOT</p>
        </div>
        <img className="product-img-one img" src={imgOne} alt="Banner" />
        <img className="product-img-tow img" src={imgTow} alt="Banner" />
      </div>
    </div>
  );
};

export default Product;

{
  /* <img width="960" height="905" src="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" alt="Banner Image"></img> */
}
