import React, { useContext, useState } from "react";
import "./FoodDisplay.css"
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
function FoodDisplay({id,name,description,image,price}){
 
    const{addItem,removeItem,cartItems} =useContext(StoreContext)

    return(
        
        <>
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt="" />
                {
                    !cartItems[id]? 
                    <img className="add" onClick={()=>addItem(id)} src={assets.add_icon_white} alt="" />:
                    <div className="food-item-counter">
                        <img onClick={()=>removeItem(id)} src={assets.remove_icon_red} alt="" />
                        {cartItems[id]}
                        <img onClick={()=>addItem(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs{price}</p>
            </div>
        </div>
        </>
    )
}
export default FoodDisplay