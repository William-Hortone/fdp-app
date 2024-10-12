import React from "react";
import "./header.css";
import { CardImg, Button } from "../../components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <span />
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-15.jpg" />
        <div className="app__header-container">
          <h2>POUR HOMME</h2>
          <Link to="/products">
          <Button 
              text='Voir Plus'
              btnType='button'
              bgOne="#fff" 
              bgTwo="#a90a0a" 

            />
          </Link>
        </div>
      </div>
      <div className="app__header-right">
        <span />
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" />
        <div className="app__header-container">
          <h2>POUR FEMMES</h2>
          <Link to="/products">
            <Button 
              text='Voir Plus'
              btnType='button'
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
