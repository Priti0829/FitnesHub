import React, { useEffect, useState } from 'react';
// import "./DiseaseMain.css";

const DiseaseData = ({ data }) => {
  const [filterData, setFilterData] = useState([])


  const fetchData = async () => {
    const diseaseResponse = await fetch('http://localhost:4000/disease/alldisease');
    const diseasesData = await diseaseResponse.json();
    const showdata = diseasesData.diseases.filter(
      (disease) => disease.name.toLowerCase() === data.toLowerCase()
    );
    setFilterData(showdata);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div style={{ backgroundColor: "#baecd66e" }}>
      <div className='container d-flex justify-content-center flex-column align-items-center'>
        {filterData.map((disease, index) => {
          return (
            <div className="card1 my-5" style={{ width: "800px" }} key={index}>
              <p className="card1-title">{disease.name}</p>
              <p className="small-desc">{disease.description}</p>

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
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DiseaseData;
