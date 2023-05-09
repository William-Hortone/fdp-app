import React, { useRef, useState } from "react";
import "./bestProduct.css";
import { Product } from "../../components";
import { images, data } from "../../constants";
import Slider from "react-slick";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const BestProduct = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = [
    images.machine1,
    images.machine2,
    images.machine3,
    images.machine4,
    images.machine1,
    images.machine2,
    images.machine3,
    images.machine4,
  ];

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const handleSwipe = (event) => {
    const sensitivity = 50; // minimum swipe distance to trigger slide change
    const deltaX = event.changedTouches[0].clientX - event.touches[0].clientX;
    if (deltaX > sensitivity && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (deltaX < -sensitivity && currentSlide < gallery.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="app__bestProduct" onTouchStart={handleSwipe}>
      <h2> Mieux Vendus</h2>
      {/*<div className="app__bestProduct-container">
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine5} imgTow={images.machine2} />
          </div>
          <div className="product-box-description">
            <h3>{data[0].name}</h3>
            <h3>{data[0].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine3} imgTow={images.machine4} />
          </div>
          <div className="product-box-description">
            <h3>{data[1].name}</h3>
            <h3>{data[1].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine1} imgTow={images.machine6} />
          </div>
          <div className="product-box-description">
            <h3>{data[2].name}</h3>
            <h3>{data[2].price}</h3>
          </div>
        </div>
        <div className="product-container">
          <div className="product-box">
            <Product imgOne={images.machine2} imgTow={images.machine4} />
          </div>
          <div className="product-box-description">
            <h3>{data[3].name}</h3>
            <h3>{data[3].price}</h3>
          </div>
        </div>
      </div> */}
      {/* <div className="app__gallery flex__center">
     

        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {gallery.map((image, index) => (
              <div
                className="app__gallery-images-card"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div> */}

      <div className="app__bestProduct-images" onTouchStart={handleSwipe}>
        <div className="app__bestProduct-images_container">
          {gallery.map((image, index) => (
            <div
              className={`app__bestProduct-images-card  ${
                index === currentSlide ? "active" : ""
              }`}
              key={`gallery_image-${index + 1}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* <img src={image} alt="gallery image" /> */}
              {/* <BsInstagram className="gallery__image-icon" /> */}
              {/* <Product imgOne={image} imgTow={image} /> */}

              <div className="product-container">
                <div className="product-box">
                  <Product imgOne={image} imgTow={image} />
                </div>
                <div className="product-box-description">
                  <h3>{data[0].name}</h3>
                  <h3>{data[0].price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="app__bestProduct-images_arrows">
          <BsArrowLeftShort
            className={`bestProduct__prevArrow-icon ${
              currentSlide === 0 ? "disabled" : ""
            }`}
            onClick={() => handleSlideChange(currentSlide - 1)}
          />
          <div className="gallery__dots">
            {gallery.map((image, index) => (
              <div
                key={`gallery_dot-${index + 1}`}
                className={`gallery__dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
          <BsArrowRightShort
            className={`bestProduct__nextArrow-icon ${
              currentSlide === gallery.length - 1 ? "disabled" : ""
            }`}
            onClick={() => handleSlideChange(currentSlide + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
