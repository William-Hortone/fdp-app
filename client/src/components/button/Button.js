import React from "react";
import "./button.css";

const Button = ({text, btnType, onClick,bgOne,colorOne, colorTwo, bgTwo, width}) => {
  return (
    <button className="app__button" type={btnType} onClick={onClick} style={{ width:width}}>
      <div style={{backgroundColor:bgOne, color:colorOne}} className="app__button-box-one box-btn">
        <p>{text}</p>
      </div>
      <div style={{backgroundColor:bgTwo, color:colorTwo}} className="app__button-box-tow box-btn">
        <p>{text}</p>
      </div>
    </button>
  );
};

export default Button;
