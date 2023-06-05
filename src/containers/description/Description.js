import React from "react";
import "./description.css";
import { ArticleImg } from "../../components";
import images from "../../constants/images";
import {
  FaBox,
  FaPeopleArrows,
  FaShippingFast,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";

const Description = () => {
  return (
    <div className="app__description">
      <div className="app__description-box">
        <span>
          <FaPeopleArrows />
        </span>
        <h3>24/24 SUPPORT</h3>
        <p>
          Nous sommes a votre écoutes et a votre <br /> disposition 24/24 & 7/7
        </p>
      </div>
      <div className="app__description-box">
        <span>
          <FaShippingFast />
        </span>
        <h3>Livraison gratuite</h3>
        <p>
          Nous vous offrons une livraison gratuite <br /> dans le grand
          Lireville
        </p>
      </div>
      <div className="app__description-box">
        <span>
          <FaStar />
        </span>
        <h3>Service de qualité</h3>
        <p>
          Votre satisfaction est notre priorité, <br /> nous vous offrons un
          service de qualité
        </p>
      </div>
      {/* <div className="app__description-box">
        <span>
          <FaShippingFast />
        </span>
        <h3>Livraison gratuite</h3>
        <p>
          Nous vous offrons une livraison gratuite <br /> dans le grand
          Lireville
        </p>
      </div> */}
    </div>
  );
};

export default Description;
