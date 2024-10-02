import React from "react";
import "./categoryArticle.css";
import { Link } from "react-router-dom";
import { CardImage, ProductBox } from "../../components";

const CategoryArticles = ({ articles }) => {
  // console.log('let see articles:', articles[0].images[0].img);
  return (
    <div className="app__categoryArticle">
      <div className="app__categoryArticle-container">
        {articles?.map((article, index) => (
          <Link key={index} className="article">
            <article>
              <ProductBox
                // Safely accessing images
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
