import React from 'react';
import './App.css';
import Forgot from './components/Forgot';
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
        <Routes>
          <Route exact path="/Login_Page" element={ <Login />} />
          <Route exact path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


