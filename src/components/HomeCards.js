import React, { Fragment } from "react";
import cover from "./style/images/HomeCover.jpg";
import shirts from "./style/images/shirt.jpg";
import jeans from "./style/images/jeans.jpg";
import tshirts from "./style/images/tshirt.jpg";
import shoes from "./style/images/shoes.jpg";
import "./style/HomeCard.css";

const HomeCards = () => {
  return (
    <Fragment>
      <div className="card-main">
        <div className="card-1">
          <img src={cover} className="image" alt="" />
          <h2>
            Welcome <br />
            To <br />
            Our
            <br />
            Store..
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="container_shirt">
          <img className="shirt" alt="" src={shirts} />
          <span>Shirts</span>
        </div>
        <div className="container_jeans">
          <img className="jean" alt="" src={jeans} />
          <span>Jeans</span>
        </div>
        <div className="container_tshirt">
          <img className="tshirt" alt="" src={tshirts} />
          <span>T-shirts</span>
        </div>
        <div className="container_shoes">
          <img className="shoes" alt="" src={shoes} />
          <span>Shoes</span>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCards;
