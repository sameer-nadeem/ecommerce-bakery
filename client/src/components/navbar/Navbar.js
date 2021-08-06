import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import "./Navbar.css";
const Navbar1 = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="nav">
        <div className="menu-wrap">
          <a href="#home">
            <div className="logo">BR BAKERS</div>
          </a>
          <div className="menu">
            <a href="#home">
              <div className="menu-item active">Home</div>
            </a>
            <a href="#about">
              <div className="menu-item">About</div>
            </a>
            <a href="#food-menu">
              <div className="menu-item">Menu</div>
            </a>
            <a href="#testimonial">
              <div className="menu-item">Testimonial</div>
            </a>
          </div>
          <div className="right-menu">
            <div className="cart-btn cart">
              <i className="bx bx-cart"></i>
            </div>
            <div className="cart-btn hamburger">
              <FaIcons.FaBars onClick={showSidebar} />
            </div>
          </div>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoIcons.IoCloseSharp />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={sidebar ? "remaining active" : "remaining"}
        onClick={showSidebar}
      ></div>
    </>
  );
};

export default Navbar1;
