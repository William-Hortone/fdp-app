import React, { useEffect, useState } from "react";
import './CartItem.css';
import axios from "axios";
import { BASE_URL } from "../../hooks/config";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartItem = ({ item, userId, onRemove }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const [itemId, setItemId] = useState(item?.productId);
  const [product, setProduct] = useState();
  const [totalPrice, setTotalPrice] = useState(item?.totalPrice || 0); 

  useEffect(() => {
    setItemId(item?.productId);
  }, [item]);

  // Fetch product details
  const handleGetUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/articles/getArticle/${itemId}`);
      setProduct(response?.data);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (itemId) {
      handleGetUser();
    }
  }, [itemId]);

  // Update total price when quantity changes
  useEffect(() => {
    if (product) {
      setTotalPrice(quantity * product.price); 
    }
  }, [quantity, product]);

  // Remove item from cart
  const handleRemoveItem = async () => {
    if (userId && itemId) {
      try {
        const response = await axios.delete(`${BASE_URL}/users/removeItem/${userId}/${itemId}`);
        console.log("Item removed from cart successfully", response);
        onRemove(itemId);
      } catch (error) {
        console.log("Error removing item from cart:", error);
      }
    }
  };

  const handleReduceQuantity = () => {
    let newQuantity = quantity - 1;
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
  };

  const handleAddQuantity = () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="app__cartItem">
      <div className="app__cartItem-img">
        <img src={product?.images[0].img} alt="article product" />
      </div>

      <div className="app__cartItem-container">
        <div className="container-header">

          <h2 className="cssanimation leRotateSkateInLeft sequence">{product?.name}</h2>
        </div>
        <p>Category : <span >{product?.category} </span> </p>
        <p>Prix:  <span>{totalPrice}</span>  Fcfa</p>
        <div className="cartItem-quantity">
          <button className="btn-article" onClick={handleReduceQuantity}>
            -
          </button>
          <p className="product-unit">{quantity}</p>
          <button className="btn-article" onClick={handleAddQuantity}>
            +
          </button>
        </div>
      </div>

      {/* Delete button */}
      <div className="delete-item">
        <MdOutlineDeleteOutline color="#a90a0a" onClick={handleRemoveItem} size={20} />
      </div>
    </div>
  );
};

export default CartItem;
