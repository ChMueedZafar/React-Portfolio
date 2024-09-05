import "./HeroimgStyle.css";
import React from 'react'
import IntroImg from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="introimg"/>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/Project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>

                </div>

            </div>
        </div>  
    </div>
  )
}

export default Heroimg
