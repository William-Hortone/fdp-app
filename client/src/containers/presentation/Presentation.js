import React from "react";
import { Link } from "react-router-dom";
import { ButtonBorder, CardImage } from "../../components";
import images from "../../constants/images";
import "./presentation.css";

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
            <Link to="products">
              <ButtonBorder color="#000" />
            </Link>
          </div>
        </div>
        <div className="app__presentation-right">
          <CardImage linkImg={images.machine2} />
        </div>
      </div>
      <div className="app__presentation-container-tow">
        <h2>la qualité a un prix tres execible</h2>
      </div>
    </div>
  );
};

export default Presentation;
