import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyle.css";
import React from 'react'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="loacion">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Housing Society.</p>
                        <p>Pakistan</p>  
                        </div>          
                </div>
                <div className="phone">
               <h4>     
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +923277294654
                </h4>
                </div>
                <div className="email">
               <h4>     
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                chmueedzafar@gmail.com
                </h4>
                </div>
                </div>

            <div className="right">
                <h4>About The Company</h4>
                <p>
                    This is me Abdul Mueed zafar. CEO & Founder of A-M.z. I enjoy dissussing new Projects and Challeges.</p>
                    <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default footer
