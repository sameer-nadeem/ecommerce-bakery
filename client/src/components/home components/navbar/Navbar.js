import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import "./Navbar.css";
const Navbar1 = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Fragment>
      <div className="my-nav">
        <div className="my-menu-wrap">
          <a href="#home">
            <div className="my-logo">BR BAKERS</div>
          </a>
          <div className="my-menu">
            <a href="#home">
              <div className="my-menu-item active">Home</div>
            </a>
            <a href="#about">
              <div className="my-menu-item">About</div>
            </a>
            <a href="#food-menu">
              <div className="my-menu-item">Menu</div>
            </a>
            <a href="#testimonial">
              <div className="my-menu-item">Testimonial</div>
            </a>
          </div>
          <div className="my-right-menu">
            <div className="my-cart-btn cart">
              <i className="bx bx-cart"></i>
            </div>
            <div className="my-cart-btn hamburger">
              <FaIcons.FaBars onClick={showSidebar} />
            </div>
          </div>
        </div>
      </div>

      <nav className={sidebar ? "my-nav-menu active" : "my-nav-menu"}>
        <ul className="my-nav-menu-items" onClick={showSidebar}>
          <li className="my-navbar-toggle">
            <Link to="#" className="my-menu-bars">
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
        className={sidebar ? "my-remaining active" : "my-remaining"}
        onClick={showSidebar}
      ></div>
    </Fragment>
  );
};

export default Navbar1;
