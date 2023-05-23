import React, { useState, useContext, createContext } from 'react';
import './App.css';
import Shop from './components/Shop'
import NavBar from './components/NavBar';
import AppHomePage from './components/AppHomePage';
import data from './Data';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { UserContext } from './components/userContext'






function App() {

  const [itemsState, setItemsState] = useState({value : false});

  const [ cartItems, setCartItems ] = useState(data);

  const [ shopItems, setShopItems ] = useState([])

  




  return (
  <>
  
    <UserContext.Provider value={{itemsState, setItemsState}}>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<AppHomePage items2={shopItems} setShopItems = {setShopItems} items={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop  items2 = {shopItems} setShopItems = {setShopItems} items={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
  
      </UserContext.Provider>
    </>
  );
}

export default App;
