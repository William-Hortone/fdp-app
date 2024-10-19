import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product, ProductCarouselBox } from "../../components";
import { images, data } from "../../constants";
import StarRatings from "react-star-ratings";
import "./carousel.css";

const Carousel = ({ linkImg, img }) => {
  const [rating, setRating] = useState(4);


  const handleSliderClick =() =>{

  }
  return (
    <div className="app__carousel">
      <Slider dots={true} infinite={true} speed={500} className="slider disable-click" onClick={(e) => e.stopPropagation()}   >
        <div className="app__carousel-container carousel-largeScreen">
          <div className="app__carousel-container_box">
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[6].price}
                name={data[6].name}
                imgOne={images.machine23}
                imgTow={images.machine18}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[3].price}
                name={data[3].name}
                imgOne={images.machine3}
                imgTow={images.machine15}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[4].price}
                name={data[4].name}
                imgOne={images.machine16}
                imgTow={images.machine17}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[5].price}
                name={data[5].name}
                imgOne={images.machine20}
                imgTow={images.machine5}
              />
            </div>
          </div>
        </div>

        {/* Carousel for the big screen */}
        <div className="app__carousel-container carousel-largeScreen">
          <div className="app__carousel-container_box">
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[14].price}
                name={data[14].name}
                imgOne={images.casque7}
                imgTow={images.casque8}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[12].price}
                name={data[12].name}
                imgOne={images.casque1}
                imgTow={images.casque}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[13].price}
                name={data[13].name}
                imgOne={images.casque3}
                imgTow={images.casque2}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[12].price}
                name={data[12].name}
                imgOne={images.casque}
                imgTow={images.casque4}
              />
            </div>
          </div>
        </div>
        <div className="app__carousel-container carousel-largeScreen">
          <div className="app__carousel-container_box">
            <div className="carousel-content">
              <ProductCarouselBox
                price={data[15].price}
                name={data[15].name}
                imgOne={images.corde}
                imgTow={images.corde3}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                // // price={data[16].price}
                name={data[16].name}
                imgOne={images.corde10}
                imgTow={images.corde9}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                // // price={data[17].price}
                name={data[17].name}
                imgOne={images.sport4}
                imgTow={images.sport7}
              />
            </div>
            <div className="carousel-content">
              <ProductCarouselBox
                // // price={data[16].price}
                name={data[16].name}
                imgOne={images.corde12}
                imgTow={images.corde11}
              />
            </div>
          </div>
        </div>
      </Slider>

      {/* Carousel for the small  screen */}

      <Slider dots={true} infinite={true} speed={500} className="slider-tow">
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.machine23} imgTow={images.machine18} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.machine3} imgTow={images.machine15} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.machine16} imgTow={images.machine17} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.machine20} imgTow={images.machine5} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque7} imgTow={images.casque8} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque1} imgTow={images.casque} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque3} imgTow={images.casque2} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque} imgTow={images.casque4} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque7} imgTow={images.casque8} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque1} imgTow={images.casque} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque3} imgTow={images.casque2} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.casque} imgTow={images.casque4} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.corde} imgTow={images.corde3} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.corde10} imgTow={images.corde9} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.sport4} imgTow={images.sport7} />
        </div>
        <div className="carousel-content">
          <ProductCarouselBox imgOne={images.corde12} imgTow={images.corde11} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
