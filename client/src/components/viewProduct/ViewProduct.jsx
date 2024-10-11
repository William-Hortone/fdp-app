import React from "react";
import "./viewProduct.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../constants";
import Button from "../button/Button";
import { IoCloseSharp } from "react-icons/io5";

const ViewProduct = ({ article, setShowProduct }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
              <button className="btn-article">-</button>
              <p className="product-unit">5</p>
              <button className="btn-article">+</button>
            </div>
            <Button
              bgTwo="#dcca87"
              bgOne="#a90a0a"
              colorOne="#fff"
              colorTwo="#000"
              text="Ajouter au Panier"
              btnType="button"
            />
          </div>
        </div>

        <button className="close-btn" >
          <IoCloseSharp  size={25} color="black" onClick={() =>setShowProduct(false)} />
        </button>
      </div>
    </>
  );
};

export default ViewProduct;
