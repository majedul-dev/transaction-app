import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import productList from "../../data";
import { FiHeart } from "react-icons/fi";

const Profile = () => {
  return (
    <div className=" profile">
      <div className="container row">
        <div className="col-md-4">
          <div className="profile__info">
            <img
              src="https://statics.olx.in/external/base/img/avatar_1.png"
              alt=""
            />
            <div>
              <h2>John Doe</h2>
              <small>Member since Sep 2020</small>
            </div>
            <Link to="/edit-profile" className="profile__btn">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="col-md-8">
          <h3>Your all AD</h3>
          <div className="row py-3">
            {productList.splice(0, 5).map((product) => (
              <Link
                to={`/product/${product.id}`}
                className="col-md-4 my-2"
                key={product.id}
              >
                <div className="card product">
                  <div className="product--top">
                    <img
                      src={product.image[0]}
                      alt=""
                      className="product--img"
                    />
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
      </div>
    </div>
  );
};

export default Profile;
