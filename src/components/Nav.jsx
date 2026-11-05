import React, { useState } from "react";
import "../style/Nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  function openMenu() {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>Recipes Home</h2>
        </div>

        <div className="links">
          <Link to="">Home</Link>
          <div className="dropdown">
            <button className="dropdown-btn" type="button">
              Recipes ▾
            </button>
            <div className="dropdown-content">
              <Link to="MainDishes">Main Dishes</Link>
              <Link to="Desserts">Desserts</Link>
              <Link to="Smoothies">Smoothies</Link>
            </div>
          </div>

          <Link to="ContactUs">Contact us</Link>
        </div>
        <div className="mobile-icon">
          <button onClick={openMenu}>&#9776;</button>
        </div>
      </nav>
      <div className={`nav-links-mobile ${mobileMenu ? "open-menu" : ""}`}>
        <Link to="">Home</Link>
        <Link to="contactUs">Contact us</Link>
        <Link to="MainDishes">Main Dishes</Link>
        <Link to="Desserts">Desserts</Link>
        <Link to="Smoothies">Smoothies</Link>
      </div>
    </>
  );
};
export default NavBar;
