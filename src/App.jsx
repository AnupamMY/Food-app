
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from './components/Footer/Footer.jsx'
import { useState } from 'react'
import Login from './components/Login/Login.jsx'
import Loading from './components/Loading.jsx'


function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
     
     </div>
      <Footer/>
    </>
    
  )
}

export default App
