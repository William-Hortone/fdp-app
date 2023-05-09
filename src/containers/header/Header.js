import React from "react";
import "./header.css";
import { CardImg, Button } from "../../components";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <span />
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-15.jpg" />
        <div className="app__header-container">
          <h2>POUR HOMME</h2>
          <Button />
        </div>
      </div>
      <div className="app__header-right">
        <span />
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" />
        <div className="app__header-container">
          <h2>POUR FEMMES</h2>
          <Button />
        </div>
      </div>
      <span className="blur-element" />
    </div>
  );
};

export default Header;
