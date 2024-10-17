import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../button/Button";
import CartItem from "./CartItem";
import { BASE_URL } from "../../hooks/config";
import axios from "axios";
import { UserContext } from "../../hooks/context/UserContext";
import BlurEffect from "../BlurEffect";


const Cart = ({ setShowCart, showCart, cartUpdated, setCartUpdated }) => {
  const [userId, setUserId] = useState();
  const [items, setItems] = useState([]);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo?.id) {
      setUserId(userInfo.id);
    }
  }, [userInfo]);

  // Fetch the cart data for the user
  const handleGetUser = async () => {
    if (userId) {
      try {
        const response = await axios.get(`${BASE_URL}/users/getUser/${userId}`);
        setItems(response.data?.cart || []);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  // Handle cart update when cartUpdated changes
  useEffect(() => {
    if (userId && cartUpdated) {
      handleGetUser();
      setCartUpdated(false);
    }
  }, [userId, cartUpdated]);

  // Function to remove an item from the cart state
  const handleRemoveFromCart = (removedItemId) => {
    const updatedItems = items.filter(
      (item) => item.productId !== removedItemId
    );
    setItems(updatedItems);
  };


  return (
    <>
      <div className={showCart ? "app__cart show-cart" : "app__cart"}>
        <div className="app__cart--header">
          <h2>Panier</h2>
          <IoCloseSharp
            size={25}
            color="black"
            onClick={() => setShowCart(false)}
          />
        </div>
        
        <div className="app__cart--container">
          <div className="app__cart--container-content">
            {items?.map((item, index) => (
        
                <CartItem
                  key={index}
                  item={item}
                  userId={userId}
                  onRemove={handleRemoveFromCart}
                />
         
            ))}
          </div>
        </div>
        <div className="app__cart--content">
          <div className="price">
            <h3>Sous-total</h3>
            <h3>
              {items.reduce((acc, item) => acc + item.totalPrice, 0)} Fcfa
            </h3>
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

      <BlurEffect showBlur={showCart} />
    </>
  );
};

export default Cart;
