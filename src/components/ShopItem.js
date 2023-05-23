import React from 'react' 
import './Shop.css'


const ShopItem  =  ({index, item, addToCart, changeItemQuantity}) => {
  return (
    <div className="CartItem">
        <div className="CartItem-image">
            <img src={process.env.PUBLIC_URL + '/items/' + item.image} alt=""></img>
        </div>
        <div className="CartItem-info">
            <div className="info-title">
                <h2>{item.title}</h2>
            </div>
            <div className="info-stock">
                {item.stock}
            </div>
            <div className="item-actions">
                <div className="item-quantity">
                <select 
                        onChange={(e)=>changeItemQuantity(e, index)}
                        value={item.quantity}>
                        
                        <option value="1">Qty:1</option>
                        <option value="2">Qty:2</option>
                        <option value="3">Qty:3</option>
                        <option value="4">Qty:4</option>
                        <option value="5">Qty:5</option>
                        <option value="6">Qty:6</option>
                    </select>
                </div>
                <div className="item-actions-divider">|</div>
                <div className="item-add" onClick={addToCart.bind(this, index)}>
                    Add to cart
                </div>
            </div>
        </div>
        <div className="CartItem-price">
            ${item.price}
        </div>
    </div>
  )
}

export default ShopItem
