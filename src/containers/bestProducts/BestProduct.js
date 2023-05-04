import React from "react";
import "./bestProduct.css";
import { Product } from "../../components";
import images from "../../constants/images";

const BestProduct = () => {
  return (
    <div className="app__bestProduct">
      <h2> Mieux Vendus</h2>
      <div className="app__bestProduct-container">
        <div className="product-box">
          <Product imgOne={images.machine1} imgTow={images.machine2} />
        </div>

        <div className="product-box">
          <Product imgOne={images.machine3} imgTow={images.machine4} />
        </div>

        <div className="product-box">
          <Product imgOne={images.machine5} imgTow={images.machine6} />
        </div>

        <div className="product-box">
          <Product imgOne={images.machine2} imgTow={images.machine4} />
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
