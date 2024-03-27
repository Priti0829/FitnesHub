import React from "react";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <div
    style={{
      marginTop: "70px",
      marginLeft: "50px",
      position: "relative",
      padding: "20px",
    }}
  >
    <div style={{ color: "#FF2625", fontWeight: 600, fontSize: "26px" }}>
      Fitness Club
    </div>
    <div
      style={{
        fontWeight: 700,
        fontSize: "44px",
        marginBottom: "23px",
        marginTop: "30px",
      }}
    >
      Sweat, Smile <br />
      And Repeat
    </div>
    <div
      style={{ fontSize: "22px", fontFamily: "Alegreya", lineHeight: "35px" }}
    >
      Check out the most effective exercises personalized to you
    </div>
    <div style={{ marginTop: "45px" }}>
      <a
        href="#exercises"
        style={{
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </div>
    <div
      style={{
        fontWeight: 600,
        color: "#FF2625",
        opacity: "0.1",
        display: "block",
        fontSize: "200px",
        marginTop: "20px",
      }}
    >
      Exercise
    </div>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{ maxWidth: "100%" }}
    />
  </div>
);

export default HeroBanner;
