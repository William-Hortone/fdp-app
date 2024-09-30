import React from "react";
import "./categoryArticle.css";
import { Link } from "react-router-dom";
import { CardImage, ProductBox } from "../../components";

const CategoryArticles = ({ articles }) => {
  console.log('let see articles:', articles);
  return (
    <div className="app__categoryArticle">
      <div className="app__categoryArticle-container">
        {articles?.map((article, index) => (
          <Link key={index} className="article">
            <article>
              <ProductBox
                // Safely accessing images
                price={article.price}
                imgOne={article.img?.[0] || 'fallback-image-url'} 
                name={article.name}
                imgTow={article.img?.[1] || 'fallback-image-url'}
              />
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryArticles;
