import React, { useState } from "react";
import {menu_list}  from "../../assets/assets"
import "./Menu.css"

function Menu(){
    const [category,setcategory] = useState("All")
    return(
        <>
        <div className="menu" id="menu">
            <h3>Explore our menu</h3>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</p>
            <div className="menu-list">
               {menu_list.map((item,index)=>{
                return(
                   <div onClick={()=> setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
                    <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                   </div>
                )
               })}
            </div>
            <hr/>
        </div>
        </>
    )
}
export default Menu 