
import Header from './Header.js';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import './AppHomePage.css'

const  AppHomePage = ({ items, setCartItems}) => {

  

  return (
    <div className="App">
        <Header title="Amazon Cart" home="Home" />   
        <CartItems items={items} setCartItems={setCartItems} />
        <CartTotal items={items}/>
    </div>
  )
}

export default AppHomePage
