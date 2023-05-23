
import Header from './Header.js';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import './AppHomePage.css'




const  AppHomePage = ({ items, setCartItems, items2, setShopItems}) => {

  

  return (
    <div className="App">
        <Header title="Amazon Cart" home="Home" />   
        <CartItems items={items} setCartItems={setCartItems} items2={items2} setShopItems={setShopItems} />
        <CartTotal items={items} items2 = {items2} />
    </div>
  )
}

export default AppHomePage
