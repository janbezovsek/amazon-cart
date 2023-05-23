import React from 'react'
import ShopItems from './ShopItems'
import './Shop.css'




const Shop = ({ items, setCartItems, items2, setShopItems}) => {

  return (
    <div>
      <div className="shop-header">
        <h1>Shop</h1>
      </div>
      {/*<CartItems items={items} setCartItems={setCartItems} />
      <CartTotal items={items}/>*/}
      <ShopItems items2 = {items2} setShopItems = {setShopItems} items = {items} setCartItems={setCartItems} />
     
  </div>
  )
}

export default Shop