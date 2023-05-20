import React from "react";
import "./categoryArticle.css";
import { Link } from "react-router-dom";
import { CardImage, ProductBox } from "../../components";

const CategoryArticles = ({ articles }) => {
  return (
    <div className="app__categoryArticle">
      <div className="app__categoryArticle-container">
        {articles.map((article, index) => (
          <Link key={index} className="article">
            <article className="">
              <ProductBox imgOne={article.img[0]} imgTow={article.img[1]} />
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryArticles;
