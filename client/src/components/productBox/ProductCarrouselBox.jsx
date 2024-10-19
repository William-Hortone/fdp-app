import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Product } from "../";
import "./productBox.css";

const ProductCarouselBox = ({  imgOne, imgTow, price, name }) => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <div className="app__productBox" >
        <div className="app__OproductBox-carousel">
          <div className="carousel-content-box">
            <Product imgOne={imgOne} imgTow={imgTow} />
          </div>
          <div className="carousel-content-description">
            <h3>{name}</h3>
            <h3>{price} Fcfa</h3>
            <div className="star">
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={(newRating) => setRating(newRating)}
                numberOfStars={5}
                name="rating"
                className="stars"
                starDimension="1rem"
              />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ProductCarouselBox;
