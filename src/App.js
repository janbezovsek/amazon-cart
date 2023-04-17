import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import AppHomePage from './components/AppHomePage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';


function App() {

  //const [ cartItems, setCartItems ] = useState(data);

  return (
  <>
    
      <Routes>
        <Route path="/" element={<AppHomePage />} />
        <Route path="home" element={<Home />}/>
      </Routes>
  

    </>
  );
}

export default App;
