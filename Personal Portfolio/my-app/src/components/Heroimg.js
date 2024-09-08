import React from 'react';
import { Link } from 'react-router-dom';
import './HeroimgStyle.css';
import IntroImg from '../assets/scott-graham-5fNmWej4tAA-unsplash.jpg';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="intro" />
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/Contact" className="btn">Contact</Link>
            <Link to="/Project" className="btn-light">Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
