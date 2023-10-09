import React, { useState, useEffect, useContext } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link } from "react-router-dom";
import { userDataContext } from "../../Context/UserDataContext";

const NavBar = () => {
  const userData = useContext(userDataContext);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo"></img>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {/* {userData !== null ? (
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="cart">
                    Cart
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="product">
                    Prodect
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="categories">
                    Categries
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="barnds">
                    Brands
                  </Link>
                </li>
              </ul>
            ) : null} */}
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="product">
                  Prodect
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="categories">
                  Categries
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="barnds">
                  Brands
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item d-flex align-items-center">
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-instargam "></i>
                <i className="fab fa-tiktok mx-2"></i>
                <i className="fab fa-linkedin mx-2"></i>
                <i className="fab fa-youtube mx-2"></i>
              </li>
              {userData === null ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>{" "}
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="login" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
