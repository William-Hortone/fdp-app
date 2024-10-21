import React from "react";
import { Link } from "react-router-dom";
import "./articleImg.css";

const ArticleImg = ({ img }) => {
  return (
    <div className="app__articleImg">
      <div className="app__articleImg-box">
        <Link className="box-text">
          <div className="">
            <h3>ELECTRONICS</h3>
          </div>
        </Link>
        <img className="card-img" src={img} alt="Banner" />
      </div>
    </div>
  );
};

export default ArticleImg;
