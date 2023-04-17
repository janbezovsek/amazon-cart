import React, { useState } from 'react'
import Header from './Header.js';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import data from '../Data';
import './AppHomePage.css'

const  AppHomePage = () => {

  const [ cartItems, setCartItems ] = useState(data);

  return (
    <div className="App">
        <Header title="Amazon Cart" home="Home" />   
        <CartItems items={cartItems} setCartItems={setCartItems} />
        <CartTotal items={cartItems}/>
    </div>
  )
}

export default AppHomePage
