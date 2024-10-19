import React from "react";
import { Link } from "react-router-dom";
import { ProductBox } from "../../components";
import "./categoryArticle.css";

const CategoryArticles = ({ articles }) => {

  return (
    <div className="app__categoryArticle">
      <div className="app__categoryArticle-container">
        {articles?.map((article, index) => (
          <Link key={index} className="article">
            <article>
              <ProductBox
                article={article}
                price={article.price}
                imgOne={article.images[0].img}
                name={article.name}
                imgTow={article.images[1].img}
              />
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryArticles;
