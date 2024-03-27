import React, { useState, useEffect } from 'react';
import Disease from './Disease';
import DiseaseData from './DiseaseData';
// import "./DiseaseMain.css";

const DiseaseContainer = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/Components/DiseaseData.json');
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Disease />
      <DiseaseData jsonData={jsonData} />
    </div>
  );
};

export default DiseaseContainer;
