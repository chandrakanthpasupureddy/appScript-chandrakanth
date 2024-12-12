import React from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import "./index.css";

const Header =()=> {
  return (
    <header className="header">
      <div className="header-first-row">
        <div className="header-logo">
          <img src="https://res.cloudinary.com/ddw4ubmbj/image/upload/v1733977558/Logo_xhyrge.jpg" alt="Company Logo" />
        </div>

        <div className="header-logo-text">
          <h1>LOGO</h1>
        </div>

        <div className="header-icons">
          <FaSearch className="icon" title="Search" />
          <FaHeart className="icon" title="Wishlist" />
          <FaShoppingBag className="icon" title="Cart" />
          <FaUser className="icon" title="Profile" />
          <select className="language-dropdown">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>

      <nav className="header-second-row">
        <a href="#shop">Shop</a>
        <a href="#skills">Skills</a>
        <a href="#stories">Stories</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
