import React from 'react'
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import './Shop.css'

const Shop = ({ items, setCartItems}) => {

  return (
    <div>
      <div className="shop-header">
        <h1>Shop</h1>
      </div>
      <CartItems items={items} setCartItems={setCartItems} />
      <CartTotal items={items}/>
  </div>
  )
}

export default Shop