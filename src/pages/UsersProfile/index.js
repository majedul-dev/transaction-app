import React from "react";
import "./style.css";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import img1 from "../../images/products/bike2.jpg";

const UsersProfile = () => {
  return (
    <section className="section profile">
      <div className="container">
        <div className="profile__userInfo">
          <img
            src="https://statics.olx.in/external/base/img/avatar_1.png"
            alt=""
          />
          <div>
            <h3>John Doe</h3>
            <p>Location: Magura Khulna Bangladesh</p>
          </div>
        </div>
        <div className="profile__postedAd">
          <div className="row">
            <div className="col-md-3">
              <Link to={`/product/3`} className="col-md-3 my-2">
                <div className="card product">
                  <div className="product--top">
                    <img src={img1} alt="" className="product--img" />
                    <FiHeart className="product--saveicon" />
                  </div>
                  <div className="card-body product--content">
                    <h3>Exchange with R15 V4</h3>
                    <p className="card-text text-muted">KTM 125</p>
                  </div>

                  <div className="product--footer">
                    <small>Today</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersProfile;
