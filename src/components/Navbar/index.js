import React, { useState } from "react";
import "./styles.css";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrDown } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container navbar_content">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar_logo" />
        </Link>
        <form className="navbar_searchForm">
          <input type="text" placeholder="Find Car, Mobile Phones and more" />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <div className="navbar__right">
          <Link to="/login">Login</Link>
          <div className="navbar--auth">
            <div onClick={() => setIsOpen(!isOpen)}>
              <img
                src="https://statics.olx.in/external/base/img/avatar_1.png"
                className="auth--image"
                alt=""
              />
              <GrDown />
            </div>
            <ul className={isOpen ? "active" : ""}>
              <Link to="/profile" className="auth--modal">
                <img
                  src="https://statics.olx.in/external/base/img/avatar_1.png"
                  className="auth--image"
                  alt=""
                />
                <div>
                  <small>Hello</small>
                  <h3>Majedul Islam</h3>
                  <Link to="">View and edit profile</Link>
                </div>
              </Link>
              <li>My Ads</li>
              <li>Setting</li>
              <li>Logout</li>
            </ul>
          </div>
          <button className="navbar__sellbutton">
            <Link to="/post">
              <BsPlus className="plus" /> Sell
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
