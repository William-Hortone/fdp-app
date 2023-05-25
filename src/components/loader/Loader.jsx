import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="app__loader">
      <div className="app__loader-left">
        <span className="app__loader-span_left span"></span>
      </div>
      <div className="app__loader-right">
        <span className="app__loader-span_right span"></span>
      </div>
      <span className="blur-element-page" />
    </div>
  );
};

export default Loader;
