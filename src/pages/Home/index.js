import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FiHeart } from "react-icons/fi";
import Banner from "../../components/Banner";
import productList from "../../data";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <h2 className="pt-4">Let's See What You are Looking for Today</h2>
      <div className="row py-3">
        {productList.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="col-md-3 my-2"
            key={product.id}
          >
            <div className="card product">
              <div className="product--top">
                <img src={product.image[0]} alt="" className="product--img" />
                <FiHeart className="product--saveicon" />
              </div>
              <div className="card-body product--content">
                <h3>Exchange with: {product.exchange}</h3>
                {/* <p>2006 - 90,000 km</p> */}
                <p className="card-text text-muted">
                  {product.description.slice(0, 30)}...
                </p>
              </div>
              <div className="product--footer">
                <small>{product.location.slice(0, 25)}</small>
                <small>{product.postedAt}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
