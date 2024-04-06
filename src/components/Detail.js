import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="detail-exercise"
      style={{
        display: "flex",
        // flexDirection: "column",
        gap: "60px",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{ maxWidth: "100%" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: "24px", color: "#4F4C4C" }}>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </div>
        {extraDetail?.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div style={{ textTransform: "capitalize", fontSize: "30px" }}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

