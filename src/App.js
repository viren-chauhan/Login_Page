import React from 'react';
import './App.css';
import Forgot from './components/Forgot';
import Intro from './components/Intro';
import Login from './components/Login';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Intro />
        <Routes>
          <Route exact path="/" element={ <Login />} />
          <Route exact path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


