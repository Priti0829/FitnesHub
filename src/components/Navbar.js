import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <div
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "25px",
      padding: " 0 20px",
    }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <div
      style={{
        flexDirection: "row",
        gap: "40px",
        fontFamily: "Alegreya",
        fontSize: "24px",
        alignItems: "flex-end",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{ textDecoration: "none", color: "#3A1212", padding: "40px" }}
      >
        Exercises
      </a>
    </div>
  </div>
);

export default Navbar;
