import React from "react";
import "./Home.css"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FoodItem from "../../components/FoodItem/FoodItem";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home(){
    
    return(
        <>
        <Header/>
        <Menu/>
        <FoodItem/>
        <AppDownload/>
        </>
    )
}
export default Home