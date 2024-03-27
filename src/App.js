import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Foods from "./nutritionPage/Foods";
<<<<<<< HEAD
import PushUp from './components/PushUp';
=======
import DiseaseMain from './DiseaseMain';
>>>>>>> d98c0ee979ade2912049bdb30230061c67e7000b

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/food" element={<Foods />} />
<<<<<<< HEAD
      <Route path="/pushup" element={<PushUp />} />
=======
      <Route path ="/disease" element ={<DiseaseMain/>}/>
>>>>>>> d98c0ee979ade2912049bdb30230061c67e7000b
    </Routes>
    <Footer />
  </div>
);

export default App;
