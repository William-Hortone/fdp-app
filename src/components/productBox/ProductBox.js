import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Product } from "../";
import { images, data } from "../../constants";
import "./productBox.css";

const ProductBox = ({ imgOne, imgTow }) => {
  const [rating, setRating] = useState(4);

  return (
    <div className="app__productBox">
      <div className="app__productBox-carousel">
        <div className="carousel-content-box">
          <Product imgOne={imgOne} imgTow={imgTow} />
        </div>
        <div className="carousel-content-description">
          <h3>{data[0].name}</h3>
          <h3>{data[0].price}</h3>
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
  );
};

export default ProductBox;

{
  /* <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.machine11} imgTow={images.machine10} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.machine25} imgTow={images.machine1} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.machine5} imgTow={images.machine20} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.machine25} imgTow={images.machine18} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            </div> */
}
{
  /* <div className="app__carousel-container">
          <div className="app__carousel-container_box">
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.casque1} imgTow={images.casque} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.casque2} imgTow={images.casque3} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.casque7} imgTow={images.casque8} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.casque4} imgTow={images.casque1} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
        </div>
        <div className="app__carousel-container">
          <div className="app__carousel-container_box">
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.alters} imgTow={images.alters2} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.corde10} imgTow={images.corde11} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.corde} imgTow={images.corde3} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
            <div className="carousel-content">
              <div className="carousel-content-box">
                <Product imgOne={images.sport3} imgTow={images.corde9} />
              </div>
              <div className="carousel-content-description">
                <h3>{data[0].name}</h3>
                <h3>{data[0].price}</h3>
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
        </div> */
}
