import React, { useRef, useState } from "react";
import "./bestProduct.css";
import { Product, Carousel } from "../../components";
import { images, data } from "../../constants";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const BestProduct = () => {
  return (
    <div className="app__bestProduct">
      <h2> Mieux Vendus</h2>

      <Carousel />
    </div>
  );
};

export default BestProduct;
