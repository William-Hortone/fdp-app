import React from "react";
import "./about.css";
import { Infos, Navbar } from "../../components";
import { Description, Footer, Team } from "../../containers";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="app__about">
      <Infos colorLink="#000000" colorBorder="#E5E5E5" />
 
      <Navbar cartColor="#000000" borderColor2="#E5E5E5" colorBorder="#000000" colorIcon="#ffffff" colorLink="#000000" />
      <div className="app__about-about_us">
        <img
          src={images.banner3}
          alt=""
        />
        <h2>A propos de Nous</h2>
      </div>
      <Team />
      <Description />
      <div className="app__loader">
        <div className="app__loader-left">
          <span className="app__loader-span_left span"></span>
        </div>
        <div className="app__loader-right">
          <span className="app__loader-span_right span"></span>
        </div>
        <span className="blur-element-page" />
      </div>

      <Footer color="#222222" colorLink="#ffff" />
    </div>
  );
};

export default About;
