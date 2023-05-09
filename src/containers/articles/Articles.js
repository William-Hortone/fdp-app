import React from "react";
import "./articles.css";
import { ArticleImg } from "../../components";
import images from "../../constants/images";

const Articles = () => {
  return (
    <div className="app__articles">
      <div className="app__articles-left">
        <ArticleImg img={images.casque1} />
      </div>
      <div className="app__articles-right">
        <ArticleImg img={images.casque3} />
      </div>
    </div>
  );
};

export default Articles;
