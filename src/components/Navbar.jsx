<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyPortfolio</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


=======

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    
    <nav className="navbar">
     
      <h2 className="logo">My Portfolio</h2>

     
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>  
        <li><a href="#about">About</a></li>  
        <li><a href="#projects">Projects</a></li>  
        <li><a href="#contact">Contact</a></li>  
      </ul>
    </nav>
  );
}

export default Navbar;
>>>>>>> 4fefc02a5ad291523f1fb0d55c41557d2649bf89
