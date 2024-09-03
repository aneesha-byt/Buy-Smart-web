import React from "react";
import "./HeroProduct.css";
import { Link } from "react-router-dom";

function HeroProduct() {
  return (
    <div className="hero-container">
      <h1>BUY-SMART </h1>
      <p>
        Experience the perfect blend of style, quality, and innovation with our
        latest collection of e-commerce products. Each item in our range is
        meticulously crafted to meet the highest standards, ensuring that you
        receive products that not only look exceptional but also stand the test
        of time. Whether you're seeking the latest in fashion, cutting-edge
        electronics, or unique home décor, our curated selection offers
        something for everyone.
      </p>

      
      {/* <div className="container">
      <img
        src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        className="Tvimg"
      />    
          </div>
   */}
        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" className="bangle"/>
      
  
      <div className="list">
        <ul>
          <li>Home</li>
          <li>Shop Per Category</li>
          {/* <Link to ='/checkout'> */}
          <li>Checkout</li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
}

export default HeroProduct;
