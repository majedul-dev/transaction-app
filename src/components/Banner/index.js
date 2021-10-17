import React from "react";
import "./style.css";
import banner from "../../images/trade up.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;
