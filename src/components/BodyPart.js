import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: bodyPart === item ? "4px solid #FF2625" : "none",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      width: "270px",
      height: "282px",
      cursor: "pointer",
      background: "#fff",
      marginBottom: "47px",
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Alegreya",
        color: "#3A1212",
        textTransform: "capitalize",
      }}
    >
      {item}
    </div>
  </div>
);

export default BodyPart;
