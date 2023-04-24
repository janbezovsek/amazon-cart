import React from 'react'
import ShopItem from './ShopItem'


function ShopItems({ items, setCartItems }) {

   /*

    const deleteItem = (indexToDelete) => {
        //filter out the items where the item index does not equal to the selected item
        const newItems = items.filter((value, index)=>{
            return index !== indexToDelete;
        })
        setCartItems(newItems);
    }
    */
    const addToCart = () => {
        
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
                            
                        />
                    )}
                </div>
        </div>
        </div>
    )
    
}

export default ShopItems
