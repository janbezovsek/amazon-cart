import React, { useState, useContext, createContext } from 'react';
import './App.css';
import Shop from './components/Shop'
import NavBar from './components/NavBar';
import AppHomePage from './components/AppHomePage';
import data from './Data';
import data2 from './Data2';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { UserContext } from './components/userContext'






function App() {

  const [itemsState, setItemsState] = useState({value : false});

  const [ cartItems, setCartItems ] = useState(data);

  const [ shopItems, setShopItems ] = useState(data2)

  //dodaj state object(context), kjer bom v CartItems manipuliral s podatki, da bom lahko postavil pogoj,kdaj naj se 
  //elementi pokažejo v cartu, npr v obliki neke funkcije. Prav tako lahko te podatke uporavim v ShopItems v obliki funckije
  //,ko bom pritisnil na add button, da se doda element v cartItems

  return (
  <>
    <UserContext.Provider value={{itemsState, setItemsState}}>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<AppHomePage items={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop items2 = {shopItems} setShopItems = {setShopItems} items={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
  
      </UserContext.Provider>
    </>
  );
}

export default App;
