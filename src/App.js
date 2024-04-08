import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Foods from "./nutritionPage/Foods";
import PushUp from './components/PushUp';
import DiseaseMain from './DiseaseMain';
import Diet from './Diet/Diet';
import LoginSignup from './pages/login/LoginSignup';
import Doctor from './Doctor/Doctor';
//import Chat from './chats/Chat'; 

const App = () => (
  <div>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
      <Route path="/" element={<Foods />} />
      <Route path="/pushup" element={<PushUp />} />
      <Route path="/disease" element={<DiseaseMain />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
//pm <Route path ="/chatbotcomponents" element ={<ChatbotComponent/>}></Route>