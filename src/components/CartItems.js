import React,{ useContext } from 'react'
import { UserContext } from "./userContext"
import './CartItems.css'
import CartItem from './CartItem'

function CartItems({ items, setCartItems }) {

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
    }

    const addItems = () => {
        //function to add item to the list
        
    }

//potrebno bo narediti nov aray kamor bom shranjeval izdelke, ki sem jih izbral. Iz tega araya jih bom tudi prikazoval na zaslonu.
    return (
        <div className="App-main">
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
                <div className="CartItems-items">
                    {items.map((item, index) => 
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
                    )}
                    
                </div>
        </div>
        </div>
    )
}

export default CartItems