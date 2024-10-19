import React from "react";
import { Carousel } from "../../components";
import "./bestProduct.css";


const BestProduct = () => {
  return (
    <div className="app__bestProduct">
      <h2> Mieux Vendus</h2>

      <Carousel />
    </div>
  );
};

export default BestProduct;
