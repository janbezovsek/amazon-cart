import React,{ useContext } from 'react'
import { UserContext } from "./userContext"
import './CartItems.css'
import CartItem from './CartItem'
import ShopItem from './ShopItem'






function CartItems({ items, setCartItems, items2, setShopItems }) {

    const {itemsState, setItemsState} = useContext(UserContext);

    const changeItemQuantity = (e, index) => {
        //when we select a quantity on item, we pass it in here
        //Pass in the index of the quantity
        //using the index we need to change the quantity to the selected one from select option
        //update the items state
        //Do not update the state without setter function
        const newItems = [...items];//deconstructing
        items[index].quantity= e.target.value;
        setCartItems(newItems);
    }

    const deleteItem = (indexToDelete) => {
        //filter out the items where the item index does not equal to the selected item
        const newItems = items.filter((value, index)=>{
            return index !== indexToDelete;
        })
        setCartItems(newItems);
        console.log(newItems)
    }

    

    return (
        <div className="App-main">
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
                <div className="CartItems-items">
                    {items2.map((item, index) => 
                       {
                        if(index < 3 && itemsState.value === false
                            ) { //Displaying determined items in the cart
                                
                        return <CartItem 
                            index={index}
                            item={item}
                            key={index}
                            changeItemQuantity={changeItemQuantity}
                            deleteItem={deleteItem}
                        />
                        }
                        return null
                       }
                    )
                    
                    
                    }
                    
                </div>
        </div>
        </div>
    )
}

export default CartItems