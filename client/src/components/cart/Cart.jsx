import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../button/Button";
import CartItem from "./CartItem";
import { BASE_URL } from "../../hooks/config";
import axios from "axios";
import { UserContext } from "../../hooks/context/UserContext";

const Cart = ({ setShowCart, showCart }) => {
  const [userId, setUserId] = useState();
  const [items, setItems] = useState([]);
  const { userInfo, userToken } = useContext(UserContext);

  useEffect(() => {
    if (userInfo?.id) {
      setUserId(userInfo.id);
    }
  }, [userInfo]);

  // Fetch user data and update cart badge
  const handleGetUser = async () => {
    if (userId) {
      try {
        const response = await axios.get(`${BASE_URL}/users/getUser/${userId}`);
        setItems(response.data?.cart || []);
        console.log("response.data.cart", response.data.cart);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  // Run fetch only when userId is available
  useEffect(() => {
    if (userId) {
      handleGetUser();
    }
  }, [userId]);

  useEffect(() => {
    console.log("userInfo:", userInfo);
    console.log("userId:", userId);
    console.log("items:", items);
  }, [userInfo, userId, items]);

  return (
    <div className={showCart ? "app__cart show-cart" : "app__cart"}>
      <div className="app__cart--header">
        <h2>Panier</h2>
        <IoCloseSharp size={25} color="black" onClick={() => setShowCart(false)} />
      </div>
      <div className="app__cart--container">
        <div className="app__cart--container-content">
          {items?.map((item, index) => (
            
            <CartItem key={index} item={item} />

          ))}
        </div>
      </div>
      <div className="app__cart--content">
        <div className="price">
          <h3>Sous-total</h3>
          <h3>6000 Fcfa</h3>
        </div>
        <h4>Taxes et frais de livraison inclus lors du paiement</h4>
        <Button
          width="100%"
          bgTwo="#dcca87"
          bgOne="#a90a0a"
          colorOne="#fff"
          colorTwo="#000"
          text="Procéder au Paiement"
          btnType="button"
        />
      </div>
    </div>
  );
};

export default Cart;
