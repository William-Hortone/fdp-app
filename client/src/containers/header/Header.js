import React from "react";
import "./header.css";
import { CardImg, Button } from "../../components";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <span />
        <CardImg img={images.banner1} />
        <div className="app__header-container">
          <h2>POUR HOMME</h2>
          <Link to="/products">
            <Button
              text="Voir Plus"
              btnType="button"
              bgOne="#fff"
              bgTwo="#a90a0a"
            />
          </Link>
        </div>
      </div>
      <div className="app__header-right">
        <span />
        <CardImg img={images.banner2} />
        <div className="app__header-container">
          <h2>POUR FEMMES</h2>
          <Link to="/products">
            <Button
              text="Voir Plus"
              btnType="button"
              bgOne="#fff"
              bgTwo="#a90a0a"
            />
          </Link>
        </div>
      </div>
      <span className="blur-element" />
    </div>
  );
};

export default Header;
