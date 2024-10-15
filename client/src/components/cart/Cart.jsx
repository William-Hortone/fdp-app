import React from "react";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../button/Button";
import CartItem from "./CartItem";


const Cart = ({setShowCart, showCart}) => {
  return (
    <div className={showCart ?"app__cart show-cart" : "app__cart "}>
      <div className="app__cart--header">
        <h2>Panier</h2>
        {/* <button className="close-btn"> */}
          <IoCloseSharp
            size={25}
            color="black"
            onClick={() => setShowCart(false)}
          />
        {/* </button> */}
      </div>
      <div className="app__cart--container">
      <div className="app__cart--container-content">
<CartItem />
      </div>
      </div>
      <div className="app__cart--content">
        <div className="price">
          <h3>Sous-total</h3>
          <h3>6000 Fcfa</h3>
        </div>
        <h4>Taxes et frais de livraison inclus lors le payement</h4>

        <Button
          //   onClick={handleAddToCart}
          width="100%"
          bgTwo="#dcca87"
          bgOne="#a90a0a"
          colorOne="#fff"
          colorTwo="#000"
          text="Proceder au Payement"
          btnType="button"
        />
      </div>
    </div>
  );
};

export default Cart;
