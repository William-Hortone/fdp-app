import React from "react";
import "./presentation.css";
import { Button } from "../../components";

const Presentation = () => {
  return (
    <div className="app__presentation">
      <div className="app__presentation-left">
        <h1>FOR MEN</h1>
        <div className="app__presentation-left-container">
          <h2>SPRING COLLECTION</h2>
          <p className="presentation-p p__opensans">
            Donec ornare, nunc quis cursus hendrerit, tortor turpis sodales
            turpis, quis sodales est eros id mi. Nam placerat mauris nulla, sed
            vulputate magna rutrum at. Sed eu augue tempor, porttitor metus
            eget, convallis odio.
          </p>
          <Button />
        </div>
      </div>
      <div className="app__presentation-right"></div>
    </div>
  );
};

export default Presentation;
