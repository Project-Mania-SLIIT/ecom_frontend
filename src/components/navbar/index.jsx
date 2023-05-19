import React from "react";
import "./style.css";
import Login from "../../pages/common/modal/login";
import Register from "../../pages/common/modal/register";
import { Link } from "react-router-dom";
import shoppingCart from "../../pages/user/shoppingCart";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="logo">PATIMedicals</div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/allProducts">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            {localStorage.getItem("token") == null ? (
              <>
                <div>
                  <Login />
                </div>
                <div>
                  <Register />
                </div>
              </>
            ) : (
              <>
                <a className="text-reset me-3" href="/shoppingCart">
                  <i className="fas fa-shopping-cart" />
                </a>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height={25}
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        User Profile
                      </a>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.clear();
                          window.location = "/home";
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
