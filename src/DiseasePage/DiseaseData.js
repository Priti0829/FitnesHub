// import React from 'react';
import diseaseData from './DiseaseData.json';
import React, { useEffect, useState } from 'react';
// import "./DiseaseMain.css";

const DiseaseData = ({data}) => {
  const [filterData, setFilterData] = useState([])

  // const data = "Obesity";
  
  useEffect(() => {
    const showdata = diseaseData.diseases.filter(
      (disease) => disease.name.toLowerCase() === data.toLowerCase()
    );
    setFilterData(showdata);
  }, [data]); // <-- Add an empty dependency array here

  return (
    <div style={{ backgroundColor: "#baecd66e"}}>
      <div className='container d-flex justify-content-center'>
        {filterData.map((disease, index) => {
          return (
            <div class="card1 my-5" style={{ width: "800px" }} key={index}>
              <p class="card1-title">{disease.name}</p>
              <p class="small-desc">{disease.description}</p>

              <h5 className="card1-title">Remedies</h5>
              <ul className="small-desc">
                {disease.remedies.map((remedy, i) => (
                  <li key={i}>{remedy}</li>
                ))}
              </ul>
              <h5 className="card1-title">Exercises</h5>
              <ul className="small-desc">
                {disease.exercises.map((exercise, i) => (
                  <li key={i}>{exercise}</li>
                ))}
              </ul>

              <h5 className="card1-title">Foods to Eat</h5>
              <ul className="small-desc">
                {disease.foods_to_eat.map((food, i) => (
                  <li key={i}>{food}</li>
                ))}
              </ul>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DiseaseData;
