import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./style.css";
import { FiHeart } from "react-icons/fi";
import { GrNext } from "react-icons/gr";
import { productList } from "../../data";
import map from "../../images/staticmap.png";
import { OfferModal } from "../../components";

const ProductDetail = ({ match }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const product = productList.find(
    (product) => product.id === +match.params.productId
  );

  return (
    <section className="section productdetail">
      <div className="container row">
        <div className="col-md-8">
          <Carousel className="productdetail__carousel">
            {product.image.map((img, index) => (
              <Carousel.Item
                key={index}
                className="productdetail__carouselItem"
              >
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="productdetail__description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="productdetail__info">
            <div className="info--top">
              <div>
                <h2>Exchange with - {product.exchange}</h2>
                <p>{product.name}</p>
              </div>
              <FiHeart className="product--saveicon" />
            </div>
            <div className="info--bottom">
              <small>{product.location}</small>
              <small>{product.postedAt}</small>
            </div>
            <button className="sellerInfo--chatBtn mt-2" onClick={handleShow}>
              Make Offer
            </button>
            <OfferModal show={show} handleClose={handleClose} />
          </div>
          <div className="productdetail__sellerInfo">
            <h3>Seller Description</h3>
            <div className="sellerInfo--user">
              <div>
                <img
                  src="https://statics.olx.in/external/base/img/avatar_1.png"
                  alt=""
                />
                <div>
                  <h3>John Doe</h3>
                  <small>Member since Sep 2020</small>
                </div>
              </div>
              <Link to="/profile/id">
                <GrNext className="user--profile" />
              </Link>
            </div>
            <Link to="/chat" className="sellerInfo--chatBtn text-center">
              Chat with exchanger
            </Link>
          </div>
          <div className="productdetail__sellerLocation">
            <h4>Posted in</h4>
            <small>{product.location}</small>
            <img src={map} alt="Map" />
          </div>
          <h5>AD ID {product.id}</h5>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
