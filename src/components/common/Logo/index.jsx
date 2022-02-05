import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./styles.css";

const Logo = () => (
  <Link to="/" className="header-content_logo">
    <div>
      <img src={logo} alt="logo" />
      <span>
        <b>Taste</b>
      </span>
    </div>
    <p>
      <b>Restaurant & BBQ</b>
    </p>
  </Link>
);

export default Logo;
