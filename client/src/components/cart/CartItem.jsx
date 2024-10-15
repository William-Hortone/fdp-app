import React, { useEffect, useState } from "react";
import './CartItem.css';
import axios from "axios";
import { BASE_URL } from "../../hooks/config";
import { MdOutlineDeleteOutline } from "react-icons/md"

const CartItem = ({item}) => {
    const [quantity, setQuantity]= useState(item?.quantity)
    const [itemId, setItemId]= useState()
    const [product, setProduct]= useState()

    useEffect(() =>{
        setItemId(item?.productId)

console.log('My quantity',item)
console.log('My product',product)
    },[product, item])


  // Fetch user data and update cart badge
  const handleGetUser = async () => {
   
      try {
        const response = await axios.get(`${BASE_URL}/articles/getArticle/${itemId}`);
        setProduct(response?.data)
        console.log("response.data.articles", response.data)
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    

  };

  useEffect(() =>{
    if(itemId){

        handleGetUser()
    }
  },[itemId])


  return (
    <div className="app__cartItem">
      <div className="app__cartItem-img">
        <img src={product?.images[0].img} alt="article product" />
      </div>

      <div className="app__cartItem-container">
        <div className="container-header">
          <h2>{product?.name}</h2>
          {/* <p>20000 Fcfa</p> */}
        </div>
        <p>Category : {product?.category} </p>
        <p>Prix: {item?.totalPrice} Fcfa</p>
        <div className="cartItem-quantity">
          <button className="btn-article" onClick="">
            -
          </button>
          <p className="product-unit">{quantity}</p>
          <button className="btn-article" onClick="">
            +
          </button>
        </div>
      </div>

      {/* Delete btn */}
      <div className="delete-item">
      <MdOutlineDeleteOutline color="#a90a0a"  size={20}/>
      </div>
    </div>
  );
};

export default CartItem;
