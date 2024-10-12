import React, { useContext, useEffect, useState } from "react";
import { Navbar, Infos, CardCategory, Loader } from "../../components";
import { Link } from "react-router-dom";
import "./products.css";
import { images } from "../../constants";
import { CategoryArticles, Footer } from "../../containers";
import { data } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBars, FaTimes, FaList, FaSlidersH } from "react-icons/fa";
import { HandleFetchArticles } from "../../hooks/context/fetchArticles";
import { UserContext } from "../../hooks/context/UserContext";
import { TailSpin } from "react-loader-spinner";


const Products = () => {
  const { articlesData, refreshArticles, isLoading } = HandleFetchArticles();
  const { userToken } = useContext(UserContext);

  const [articles, setArticles] = useState([]);
  // const [items, setItems] = useState([]);
  const [machineNumber, setMachineNumber] = useState([]);
  const [sportNumber, setSportNumber] = useState([]);
  const [casque, setCasque] = useState([]);
  const [accessoires, setAccessoires] = useState([]);
  const [isSmallSCreen, setIsSmallSCreen] = useState(false);

  // Update articles once articlesData is available
  useEffect(() => {
    if (articlesData && articlesData.length > 0) {
      setArticles(articlesData);
    }else{
      setArticles(data);

    }
  }, [articlesData]);

  //  Function to filter categories
  const handleCategory = (category) => {
    if (category === "all") {
      setArticles(articlesData);
      return;
    }
    const handleFiltedArticle = articlesData.filter(
      (article) => category === article.category
    );

    console.log("the cat", handleFiltedArticle);
    setArticles(handleFiltedArticle);
  };

 
  //  set different categories
  useEffect(() => {
    const itemsNumber = articlesData?.filter(
      (articleCat) => articleCat.category === "machines"
    );
    const sportItems = articlesData?.filter(
      (articleCat) => articleCat.category === "sport"
    );
    const casqueItems = articlesData?.filter(
      (articleCat) => articleCat.category === "casque"
    );
    const accessoiresItems = articlesData?.filter(
      (articleCat) => articleCat.category === "accessoires"
    );
    setMachineNumber(itemsNumber);
    setSportNumber(sportItems);
    setCasque(casqueItems);
    setAccessoires(accessoiresItems);
  }, [articlesData]);

  const colorLink = "#000000";
  const colorBorder = "#00000034";

  return (
    <div className="app__products">
      <Infos colorLink={colorLink} colorBorder={colorBorder} />

      <div className="app__products-navbar">
        <Navbar
          colorLink={colorLink}
          colorIcon="#ffffff"
          colorBorder={colorBorder}
        />
      </div>

      {/*  Page Loader  */}
      <div className="app__loader">
        <div className="app__loader-left">
          <span className="app__loader-span_left span"></span>
        </div>
        <div className="app__loader-right">
          <span className="app__loader-span_right span"></span>
        </div>
        <span className="blur-element-page" />
      </div>

      <div className="app__products-header">
        <div className="app__products-header_box-one">
          <h1>Boutique</h1>
          <div>
            <Link to="/">Accueil</Link> / <span>Boutique</span>
          </div>
        </div>

        {/* Categories options */}
        <div className="app__products-header_box-two head-category-bigScreen">
          <div onClick={() => handleCategory("machines")}>
            <CardCategory img={images.machine18} title="machines" />
          </div>
          <div onClick={() => handleCategory("casque")}>
            <CardCategory img={images.casque} title="Casques" />
          </div>
          <div onClick={() => handleCategory("sport")}>
            <CardCategory img={images.sport4} title="sports" />
          </div>
          <div onClick={() => handleCategory("accessoires")}>
            <CardCategory img={images.corde11} title="accessoire" />
          </div>
        </div>

        {/* Categories options slider */}
        <div className="head-category-smallScreen">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            className="slider-categories"
          >
            <article>
              <div className="slider-category">
                <div onClick={() => handleCategory("machines")}>
                  <CardCategory img={images.machine18} title="machines" />
                </div>
                <div onClick={() => handleCategory("casque")}>
                  <CardCategory img={images.casque} title="Casques" />
                </div>
              </div>
            </article>
            <article>
              <div className="slider-category">
                <div onClick={() => handleCategory("sport")}>
                  <CardCategory img={images.sport4} title="sports" />
                </div>
                <div onClick={() => handleCategory("accessoires")}>
                  <CardCategory img={images.alters} title="accessoires" />
                </div>
              </div>
            </article>
          </Slider>
        </div>
      </div>

      <div className="app__products-container">
        {/* Left categories menu */}
        <div className="app__products-container-left category_bigScreen">
          <aside>
            <h3>Catégories</h3>
            <ul>
              <li onClick={() => handleCategory("all")}>
                Tous <span>{articlesData.length}</span>
              </li>
              <li onClick={() => handleCategory("machines")}>
                machines <span>{machineNumber.length}</span>
              </li>
              <li onClick={() => handleCategory("sport")}>
                sport <span>{sportNumber.length}</span>
              </li>
              <li onClick={() => handleCategory("casque")}>
                casque <span>{casque.length}</span>
              </li>
              <li onClick={() => handleCategory("accessoires")}>
                accessoires <span>{accessoires.length}</span>
              </li>
            </ul>

            <div className="brands-container">
              <div className="brands-container-img">
                <img src={images.brand2} alt="brand " />
              </div>
              <div className="brands-container-img">
                <img src={images.brand3} alt="brand " />
              </div>
              <div className="brands-container-img">
                <img src={images.brand1} alt="brand " />
              </div>
              <div className="brands-container-img">
                <img src={images.brand4} alt="brand " />
              </div>
              <div className="brands-container-img">
                <img src={images.brand5} alt="brand" />
              </div>
            </div>
          </aside>
        </div>

        {/* Categories display on small screen  */}
        {isSmallSCreen && (
          <div className=" category_smallScreen slide-right">
            <div className="close-btn" onClick={() => setIsSmallSCreen(false)}>
              Fermer <FaTimes color="#00000079" fontSize={25} />
            </div>
            <aside>
              <h3>Catégories</h3>
              <ul>
                <li onClick={() => handleCategory("all")}>
                  Tous <span>{data.length}</span>
                </li>
                <li onClick={() => handleCategory("machines")}>
                  machines <span>{machineNumber.length}</span>
                </li>
                <li>
                  sport <span>{sportNumber.length}</span>
                </li>
                <li onClick={() => handleCategory("casque")}>
                  casque <span>{casque.length}</span>
                </li>
                <li onClick={() => handleCategory("accessoires")}>
                  accessoires <span>{accessoires.length}</span>
                </li>
              </ul>

              <div className="brands-container">
                <div className="brands-container-img">
                  <img src={images.brand2} alt="brand " />
                </div>
                <div className="brands-container-img">
                  <img src={images.brand3} alt="brand " />
                </div>
                <div className="brands-container-img">
                  <img src={images.brand1} alt="brand " />
                </div>
                <div className="brands-container-img">
                  <img src={images.brand4} alt="brand " />
                </div>
                <div className="brands-container-img">
                  <img src={images.brand5} alt="brand " />
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Right articles display */}
   
        <div className="app__products-container-right">
          {/* <CardCategory /> */}
          <div
            onClick={() => setIsSmallSCreen(true)}
            className="toggle-categories"
          >
            <FaSlidersH color="#000000bb" fontSize={24} />
          </div>
          <CategoryArticles articles={articles} />
        </div>
      </div>
      <Footer color="#F3F3F3" />
    </div>
  );
};

export default Products;
