import React from 'react' 
import './Shop.css'


const ShopItem  =  ({index, item}) => {
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
                    
                </div>
                <div className="item-actions-divider">|</div>
                
            </div>
        </div>
        <div className="CartItem-price">
            ${item.price}
        </div>
    </div>
  )
}

export default ShopItem
