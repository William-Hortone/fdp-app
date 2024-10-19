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
import Cart from "../cart/Cart";

const ViewProduct = ({ article, setShowProduct }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { userInfo } = useContext(UserContext);
  const [userId, setUserId] = useState();
  const [productId, setProductId] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    setProductId(article._id);
  }, [article._id]);

  useEffect(() => {
    if(!userInfo){
      setUserId(0);

    }
    setUserId(userInfo?.id);
  }, [userInfo?.id, userInfo]);

  // Update the total price whenever quantity or price changes
  useEffect(() => {
    setTotalPrice(quantity * article.price);
  }, [quantity, article.price]);

  const handleReduceQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity < 1 ? 1 : newQuantity);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to add item to the cart
  const handleAddToCart = async () => {
    if (!userInfo?.token || userInfo?.token === null) {
      toast.error('Please Sign In First');
      return;
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/users/addToCart/${userId}`,
        { productId, quantity, totalPrice }
      );
      if (response) {
        toast.success("Article added to cart successfully");
        setCartUpdated(true); 
        setShowCart(true); 
      }
    } catch (error) {
      toast.error(error.response?.data || "Error adding to cart");
    }
  };





  return (
    <>
      <div className="app__viewProduct">
      <h2 className="cssanimation hu__hu__ title">Fournisseur de Proximite</h2>

        <div className="app__viewProduct-slider">
          <Slider {...settings} className="slider-container">
            <div className="product-slider">
              <img src={article.images[0].img} alt="machine" />
            </div>
            <div className="product-slider">
              <img src={article.images[1].img} alt="machine" />
            </div>
          </Slider>
        </div>

        <div className="app__viewProduct-details">

          <h2 className="cssanimation hu__hu__">Fournisseur de Proximite</h2>
          <h2 className="cssanimation leRotateSkateInLeft sequence">{article.name}</h2>
          <p>
            Prix: <span>{article.price} Fcfa</span>
          </p>
          <p>Categorie: <span > {article.category} </span></p>

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

      <Cart showCart={showCart} setShowCart={setShowCart} cartUpdated={cartUpdated} setCartUpdated={setCartUpdated} />
    </>
  );
};

export default ViewProduct;
