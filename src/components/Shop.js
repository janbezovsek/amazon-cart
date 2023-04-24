import React from 'react'
import ShopItems from './ShopItems'

import './Shop.css'

const Shop = ({ items, setCartItems}) => {

  return (
    <div>
      <div className="shop-header">
        <h1>Shop</h1>
      </div>
      {/*<CartItems items={items} setCartItems={setCartItems} />
      <CartTotal items={items}/>*/}
      <ShopItems items = {items} setCartItems={setCartItems} />
     
  </div>
  )
}

export default Shop