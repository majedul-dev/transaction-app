import React, { useState } from "react";
import "./styles.css";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BsFillFileEarmarkSpreadsheetFill, BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrDown } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closePopupProfile = () => setIsOpen(!isOpen);

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
          <Link to="/chat">
            <BsChat className="chatIcon" />
          </Link>
          <div className="navbar--auth">
            <div onClick={closePopupProfile}>
              <img
                src="https://statics.olx.in/external/base/img/avatar_1.png"
                className="auth--image"
                alt=""
              />
              <GrDown />
            </div>
            <ul className={isOpen ? "active" : ""}>
              <Link
                to="/profile"
                className="auth--modal"
                onClick={closePopupProfile}
              >
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
              <li onClick={closePopupProfile}>
                <BsFillFileEarmarkSpreadsheetFill /> <span>My Ads</span>
              </li>
              <li onClick={closePopupProfile}>
                <FiSettings /> <span>Setting</span>
              </li>
              <li onClick={closePopupProfile}>
                <FiLogOut /> <span>Logout</span>
              </li>
            </ul>
          </div>
          <button className="navbar__sellbutton">
            <Link to="/post">Exchange</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
