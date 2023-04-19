import React, { useState } from 'react';
import './App.css';
import Shop from './components/Shop'
import NavBar from './components/NavBar';
import AppHomePage from './components/AppHomePage';
import data from './Data';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';


function App() {


  const [ cartItems, setCartItems ] = useState(data);

  return (
  <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHomePage items={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop items={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
  

    </>
  );
}

export default App;
