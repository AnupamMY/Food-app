import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Nav.css"
import {Link}  from "react-router-dom"
import Cart from "../../pages/Cart/Cart";
import { StoreContext } from "../../context/StoreContext";


function Navbar({setShowLogin}){
    let [menu,setMenu] = useState("")

    const {getTotalCartAmount} = useContext(StoreContext)
    let handleClick=(menuName)=>{
       setMenu(menuName)
    }
    return(
       
         <>

        <div className="navbar">
            <Link to={"/"}><img src={assets.logo} alt="" /></Link>
            <div className="navbar-menu">
                <Link to="/" onClick={()=>handleClick("home")}className={menu=="home"?"active":""}>Home</Link>
                <a href="#menu" onClick={()=>handleClick("menu")} className={menu=="menu"?"active":""}>Menu</a>
                <a  href="#app-download" onClick={()=>handleClick("mobile")} className={menu=="mobile"?"active":""}>Mobile-app</a>
                <a  href="#footer" onClick={()=>handleClick("contact")} className={menu=="contact"?"active":""}>Contact-us</a>
            </div>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}> </div>
                </div>
                <button onClick={()=> setShowLogin(true)}>Sign In</button>
            </div>
        </div>
        </>
    )
}
export default Navbar