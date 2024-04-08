import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise);
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card my-3" style={{ position: "relative" }}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{ borderRadius: "10px" }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          <button
            style={{
              marginLeft: "33px",
              color: "#fff",
              background: "#FFA9A9",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </button>
          <button
            style={{
              marginLeft: "33px",
              color: "#fff",
              background: "#FCC757",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </button>
        </div>
        <div
          style={{
            marginLeft: "21px",
            color: "#000",
            fontWeight: "bold",
            fontSize: "24px",
            paddingBottom: "50px",
            textTransform: "capitalize",
          }}
        >
          {exercise.name}
        </div>
      </div>
    </Link>
  );
};
export default ExerciseCard;
