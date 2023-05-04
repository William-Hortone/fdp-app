import React from "react";
import "./bestProduct.css";
import { Product } from "../../components";
import { images, data } from "../../constants";

const BestProduct = () => {
  return (
    <div className="app__bestProduct">
      <h2> Mieux Vendus</h2>
      <div className="app__bestProduct-container">
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine5} imgTow={images.machine2} />
          </div>
          <div className="product-box-description">
            <h3>{data[0].name}</h3>
            <h3>{data[0].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine3} imgTow={images.machine4} />
          </div>
          <div className="product-box-description">
            <h3>{data[1].name}</h3>
            <h3>{data[1].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine1} imgTow={images.machine6} />
          </div>
          <div className="product-box-description">
            <h3>{data[2].name}</h3>
            <h3>{data[2].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine2} imgTow={images.machine4} />
          </div>
          <div className="product-box-description">
            <h3>{data[3].name}</h3>
            <h3>{data[3].price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
