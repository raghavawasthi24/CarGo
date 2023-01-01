import React ,{useRef, useState} from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "./images/logo.png";
import Arrow from "./images/arrow.png";

const Navbar = () => {

  
  return (
    <div className="navbar">
        {/* <img src={logo}/> */}
        <h1 className='logo'>CarGo.</h1>
        {/* <div className='search_field'>
          <input type="search" id='search_bar' placeholder='Tell us your location'/>
          <img src={Arrow}/>
        </div> */}
        <nav>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/howtoRent" className='link'>How to Rent</Link>
          {/* <Link to="/FAQS" className='link'>FAQS</Link> */}
          <Link to="/contact" className='link'>Contact Us</Link>
          <Link to="/offerARide" id="offer">Offer A Ride</Link>
        </nav> 
    </div>
  )
}

export default Navbar