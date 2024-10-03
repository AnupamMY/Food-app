import React, { useContext, useState } from "react";
import "./Food.css"
import { StoreContext } from "../../context/StoreContext";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import { food_list } from "../../assets/assets";
function FoodItem(){
    const {food_list} = useContext(StoreContext)
     let category ="All"
    return(
        <>
          
             <div className="food-display">
                <h2>Top dishes Near You</h2>
                <div className="food-display-item">
                    {
                        food_list.map((item,index)=>{
                           console.log(item.category)  
                           if(category==="All" || category === item.category){
                            return   <FoodDisplay key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                            
                           }
                           
                    })
                    }
                </div>
             </div>
        </>
    )
}
export default FoodItem

