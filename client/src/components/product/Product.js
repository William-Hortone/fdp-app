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

