import React from "react";
import "./Header.scss";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="main-header-container">
      <div className="top-header">
        <h5>
          CALL US NOW! <span style={{ color: "#fff" }}>385.154.11.28.35</span>
        </h5>

        <ul className="login-links">
          <li>LOGIN</li>
          <li style={{ color: "#fff" }}>SIGNUP</li>
        </ul>
      </div>
      <div className="bottom-header">
        <nav>
          <div className="navbar">
            <div className="logo">
              <a href="#"> YOUR LOGO</a>
            </div>
            <div className="nav-links">
              <div className="sidebar-logo">
                <span className="logo-name">Logo</span>
                <i className="bx bx-x"></i>
              </div>
              <ul className="links">
                <li>
                  <a href="#">Title 1</a>
                </li>
                <li>
                  <a href="#">Title 2</a>
                  <MdKeyboardArrowDown />
                  <ul className="htmlCss-sub-menu sub-menu">
                    <li>
                      <a href="#">SUBMENU 1</a>
                    </li>
                    <li>
                      <a href="#">SUBMENU 2</a>
                    </li>
                    <li>
                      <a href="#">SUBMENU 3</a>
                    </li>
                    <li className="more">
                      <span style={{ display: 'flex', alignItems: 'center'}}>
                        <a href="#">SUBMENU 4</a>
                        <MdOutlineKeyboardArrowRight />
                      </span>
                      <ul className="more-sub-menu sub-menu">
                        <li>
                          <a href="#">SUBMENU 1</a>
                        </li>
                        <li>
                          <a href="#">SUBMENU 2</a>
                        </li>
                        <li>
                          <a href="#">SUBMENU 3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Title 3</a>
                  <i className="bx bxs-chevron-down js-arrow arrow "></i>
                  <ul className="js-sub-menu sub-menu">
                    <li>
                      <a href="#">SUBMENU 1</a>
                    </li>
                    <li>
                      <a href="#">SUBMENU 2</a>
                    </li>
                    <li>
                      <a href="#">SUBMENU 3</a>
                    </li>
                    <li>
                      <a href="#">SUBMENU 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Title 4</a>
                </li>
                <li>
                  <a href="#">Title 5</a>
                </li>
                <li>
                  <a href="#">Title 6</a>
                </li>
                <li>
                  <a href="#">Title 7</a>
                </li>
              </ul>
            </div>
            <div className="search-box">
              <i className="bx bx-search"></i>
              <div className="input-box"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
