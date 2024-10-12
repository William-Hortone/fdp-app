import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Slider from "react-slick";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BASE_URL } from "../../hooks/config";
import { UserContext } from "../../hooks/context/UserContext";
import Button from "../button/Button";
import "./viewProduct.css";

const ViewProduct = ({ article, setShowProduct }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { userInfo } = useContext(UserContext); 
  console.log("useeeee",userInfo)

  const [userId, setUserId] = useState();
  const [productId, setProductId] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProductId(article._id);
  }, [article._id]);

  useEffect(() => {
    setUserId(userInfo.id);
  }, [userInfo.id]);

  //  set the total price
  useEffect(() => {
    setTotalPrice(quantity * article.price);
  }, [quantity, article.price]);

  
  //  function to reduce the quantity 
  const handleReduceQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    if (newQuantity < 1) {
      setQuantity(1);
    }
  };

  //  function to add the quantity 
  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

 

  //  Function to add item to the cart
  const handleAddToCart = async () => {
    if(!userInfo.token){
      toast.error('Please Sign In Fist')
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/users/addToCart/${userId}`,
        { productId, quantity, totalPrice }
      );
      if (response) {
        toast.success("Article added to cart successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };


  return (
    <>
      <div className="app__viewProduct">
        <div className="app__viewProduct-slider">
          <Slider {...settings}>
            <div className="product-slider">
              <img src={article.images[0].img} alt="machine" />
            </div>
            <div className="product-slider">
              <img src={article.images[1].img} alt="machine" />
            </div>
          </Slider>
        </div>

        <div className="app__viewProduct-details">
          <h2>{article.name}</h2>
          <p>
            Prix: <em> {article.price} Fcfa </em>
          </p>
          <p>Category:{article.category}</p>

          <div className="details-content">
            <div className="">
              <button className="btn-article" onClick={handleReduceQuantity}>
                -
              </button>
              <p className="product-unit">{quantity}</p>
              <button className="btn-article" onClick={handleAddQuantity}>
                +
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              bgTwo="#dcca87"
              bgOne="#a90a0a"
              colorOne="#fff"
              colorTwo="#000"
              text="Ajouter au Panier"
              btnType="button"
            />
          </div>
        </div>

        <button className="close-btn">
          <IoCloseSharp
            size={25}
            color="black"
            onClick={() => setShowProduct(false)}
          />
        </button>
      </div>
    </>
  );
};

export default ViewProduct;
