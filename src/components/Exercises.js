import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
// import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // if (!currentExercises.length) return <Loader />;

  return (
    <div className="container" id="exercises" style={{ marginTop: "50px", padding: "20px" }}>
      <div
        style={{ fontSize: "39px", fontWeight: "bold", marginBottom: "46px" }}
      >
        Showing Results
      </div>
      <div style={{ flexDirection: "row", gap: "50px", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="row d-flex justify-content-center">
          {currentExercises.map((exercise, index) => (
            <div key={index} className={`col-lg-4 col-md-6 col-sm-6 mb-4 ${exercises.length === 1 ? 'mx-auto' : ''}`}>
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>
      </div>
      {/* <div style={{ marginTop: '70px', alignItems: 'center' }}>
        {exercises.length > 9 && (
          <div>
            {Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(null, i + 1)}
                style={{
                  marginLeft: '5px',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  background: currentPage === i + 1 ? '#3f51b5' : '#e0e0e0',
                  color: currentPage === i + 1 ? '#fff' : '#000',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Exercises;
