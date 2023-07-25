import React from "react";
import "./Navbar.css";
import logo from "../../imgs/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCode } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <div className="navbar-main slide-in-top">
      <div className="logo-cont">
        <FontAwesomeIcon className="icon" icon={faCode} />
        <h2>FV</h2>
      </div>
      <div className="links-cont">
        <p>Home</p>
        <p>Studio</p>
        <p>Works</p>
        <p>Contact</p>
      </div>
      <div className="icons-cont">
        <button className="btn-search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input type="text" />
      </div>
    </div>
  );
}
