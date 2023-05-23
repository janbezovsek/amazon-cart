import React,{ useContext } from 'react'
import { UserContext } from "./userContext"
import ShopItem from './ShopItem'






function ShopItems({ items, setCartItems, items2, setShopItems }) {

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

    
   /*

    const deleteItem = (indexToDelete) => {
        //filter out the items where the item index does not equal to the selected item
        const newItems = items.filter((value, index)=>{
            return index !== indexToDelete;
        })
        setCartItems(newItems);
    }
    */

    //we use this function to select an item and add it from shopping cart page to home page
    const addToCart = (itemToBeAdded, index) => {
        let newItems2 = [...items];//deconstructing
        
        
        newItems2 = items.filter((value,index) =>{
            return index === itemToBeAdded
        });
        
    //we push the selected item to the existing array of items
        setShopItems(current => [...current, ...newItems2])
    
        console.log(newItems2);
    }


    return (
        <div className="App-main">
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
                <div className="CartItems-items">
                    {items.map((item, index) => 
                        <ShopItem 
                            index={index}
                            item={item}
                            key={index}
                            addToCart={addToCart}
                            changeItemQuantity={changeItemQuantity}
                        />
                    )}
                </div>
        </div>
        </div>
    )
    
}

export default ShopItems
