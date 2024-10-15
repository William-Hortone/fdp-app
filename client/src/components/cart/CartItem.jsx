import React from "react";
import './CartItem.css';


const CartItem = () => {
  return (
    <div className="app__cartItem">
      <div className="app__cartItem-img">
        <img src="" alt="article product" />
      </div>

      <div className="app__cartItem-container">
        <div className="container-header">
          <h2>Product name</h2>
          {/* <p>20000 Fcfa</p> */}
        </div>
        <p>Category : </p>
        <p>Prix: 3000 Fcfa</p>
        <div className="cartItem-quantity">
          <button className="btn-article" onClick="">
            -
          </button>
          <p className="product-unit">4</p>
          <button className="btn-article" onClick="">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
