import React from "react";
import "./header.css";
import { CardImg, Button } from "../../components";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-15.jpg" />
        <div className="app__header-container">
          <h2>MEN’S CLOTHING</h2>
          <Button />
        </div>
      </div>
      <div className="app__header-right">
        <CardImg linkImg="https://wpbingosite.com/wordpress/prido/wp-content/uploads/2022/01/banner-16.jpg" />
        <div className="app__header-container">
          <h2>MEN’S CLOTHING</h2>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
