import './App.css';
import DiseaseData from './DiseasePage/DiseaseData';
import Disease from './DiseasePage/Disease';
import { useState } from 'react';
import "./DiseaseMain.css";
// import DiseaseContainer from './Component/Diseasecontainer';


function DiseaseMain() {
  const [data, setData] = useState("")
  return (
    <div >
      {data ? <DiseaseData data={data} /> : <Disease data={data} setData={setData} />
      }
    </div>
  );
}

export default DiseaseMain;
