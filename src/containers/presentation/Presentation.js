import React from "react";
import "./presentation.css";
import { ButtonBorder, CardImage } from "../../components";
import images from "../../constants/images";

const Presentation = () => {
  return (
    <div className="app__presentation">
      <div className="app__presentation-container-one">
        <div className="app__presentation-left">
          <h1>SPORTS</h1>
          <div className="app__presentation-left-container">
            <h2>Machines de Sport</h2>
            <p className="presentation-p p__opensan">
              " Obtenez votre équipement de sport de qualité supérieure chez
              nous, des machines de sport, machines a laver, des accessoires et
              tout le nécessaire pour un mode de vie actif! "
            </p>
            <ButtonBorder color="#000" />
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
