import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div style={{ marginTop: "100px" }}>
    {/* Similar Target Muscle exercises */}
    <div style={{ marginLeft: "20px", marginTop: "60px" }}>
      <h1 style={{ fontSize: "44px", fontWeight: 700, color: "#000" }}>
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </h1>
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "8px",
        }}
      >
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>

    {/* Similar Equipment exercises */}
    <div style={{ marginLeft: "20px", marginTop: "100px" }}>
      <h1 style={{ fontSize: "44px", fontWeight: 700, color: "#000" }}>
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </h1>
      <div
        style={{
          position: "relative",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "8px",
        }}
      >
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  </div>
);

export default SimilarExercises;
