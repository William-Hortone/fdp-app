import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductCarouselBox } from "../../components";
import { data, images } from "../../constants";
import "./carousel.css";

const Carousel = () => {

  return (
    <div className="app__carousel">
      <Slider dots={true} infinite={true} speed={500} className="slider disable-click" >
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
        

      </Slider>

      {/* Carousel for the small  screen */}

      <Slider dots={true} infinite={true} speed={500} className="slider-tow">
      {data.map((item, index) =>{
        return(
          <div className="carousel-content" key={index}>
          <ProductCarouselBox imgOne={item.images[0].img} imgTow={item.images[1].img} name={item.name} price={item.price}/>
        </div>
        )
      })

      }

      </Slider>
    </div>
  );
};

export default Carousel;
