import React from "react";
import "./presentation.css";
import { ButtonBorder, CardImage } from "../../components";
import images from "../../constants/images";

const Presentation = () => {
  return (
    <div className="app__presentation">
      <div className="app__presentation-container-one">
        <div className="app__presentation-left">
          <h1>FOR MEN</h1>
          <div className="app__presentation-left-container">
            <h2>SPRING COLLECTION</h2>
            <p className="presentation-p p__opensans">
              Donec ornare, nunc quis cursus hendrerit, tortor turpis sodales
              turpis, quis sodales est eros id mi. Nam placerat mauris nulla,
              sed vulputate magna rutrum at. Sed eu augue tempor, porttitor
              metus eget, convallis odio.
            </p>
            <ButtonBorder />
          </div>
        </div>
        <div className="app__presentation-right">
          <CardImage linkImg={images.machine2} />
        </div>
      </div>
      <div className="app__presentation-container-tow">
        <h2>adipisicing elcommodi eos nulla. Animi ut magni error?</h2>
      </div>
    </div>
  );
};

export default Presentation;
