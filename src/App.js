import React, { useState, useContext, createContext } from 'react';
import './App.css';
import Shop from './components/Shop'
import NavBar from './components/NavBar';
import AppHomePage from './components/AppHomePage';
import data from './Data';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import { UserContext } from './components/userContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'






function App() {

  const [itemsState, setItemsState] = useState({value : false});

  const [ cartItems, setCartItems ] = useState(data);

  const [ shopItems, setShopItems ] = useState([])

  const [ query, setQuery ] = useState("") //for searchbar

  const [ list, setList ] = useState([]) //for searchbar

  

  const navigate = useNavigate()

  const navigateToShop = () => {
    //navigate to shopItems page
    navigate('/shop')
  }


  const onClear = () => {
    //function for clearing a searchbar input after clicking on the selected item
    setQuery("");
  };




  return (
  <>
  
    <UserContext.Provider value={{itemsState, setItemsState}}>
      <NavBar query={query} setQuery={setQuery} list={list} setList={setList} navigateToShop={navigateToShop} onClear={onClear}/>
      
      <Routes>
        <Route path="/" element={<AppHomePage items2={shopItems} setShopItems = {setShopItems} items={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop" element={<Shop  items2 = {shopItems} setShopItems = {setShopItems} items={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
  
      </UserContext.Provider>
    </>
  );
}

export default App;

library.add(fab, fas, far)
