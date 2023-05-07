import React,{ useContext } from 'react'
import { UserContext } from "./userContext"
import ShopItem from './ShopItem'


function ShopItems({ items, setCartItems, items2, setShopItems }) {

    const {itemsState, setItemsState} = useContext(UserContext);

    const num1 = 3;
   /*

    const deleteItem = (indexToDelete) => {
        //filter out the items where the item index does not equal to the selected item
        const newItems = items.filter((value, index)=>{
            return index !== indexToDelete;
        })
        setCartItems(newItems);
    }
    */
    const addToCart = (itemToBeAdded, index) => {
        let newItems2 = [...items];//deconstructing
        console.log(newItems2)
        
        newItems2 = items.filter((value,index) =>{
            return index === itemToBeAdded
        });
        setShopItems(newItems2)
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
                        />
                    )}
                </div>
        </div>
        </div>
    )
    
}

export default ShopItems
