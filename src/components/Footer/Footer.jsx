import React  from "react";
import "./Footer.css"
import { assets } from "../../assets/assets";
function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                     <img src={assets.logo} alt="" />
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat est earum quaerat non laborum illo possimus officiis eligendi aliquam?</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Deliery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+91-398-785-4562</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
                
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 -All Right Reserved</p>
        </div>
    )
}
export default Footer