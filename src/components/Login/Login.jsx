import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { assets } from "../../assets/assets";
import "./Login.css";
import StoreContext from "../../context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login({ setShowLogin }) {
    const [currentState, setCurrentState] = useState("Login");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [login,setLogin] =useState(true)
    const [fetchData,setFetchdata] = useState([])

    

    useEffect(() => {
        axios.get("http://localhost:3000/users").then(
            (d) => console.log(d.data),
            (e) => console.log(e)
        );
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3000/users").then(
            (d) => setFetchdata(d.data),
            (e) => console.log(e)
        );
    }, []);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (currentState == "Sign Up") {
            let res = fetchData.some((v)=>{
                console.log(v.name,user.name)
             return  v.name == user.name || v.email == user.email
            })
            if(res == false){
                axios.post("http://localhost:3000/users", user).then(
                    (d)=> toast.success("sign up sucessfully"),
                    (e)=>console.log(e.message)
                    )
            }
            else{
                toast.error("Invalid Data")
            }
            

        } 
        else if(currentState == "Login"){
            let value = fetchData.some((v)=>{
               return v.email == user.email && v.password == user.password
            })  
            console.log(value)
            if(value == true){
                    toast.success("Sucessfully login")
                    setLogin(false)
                }
                else{
                    toast.error("Invalid Email")
                }
            }
            
        }
    

    return (
        <>
        {login?<div className="login-popup">
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? null : (
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                )}
                <ToastContainer />
            </form>
        </div>:<></>}
        </> 
    );
}

export default Login;
