import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav__bar">
      {/* Navigation logo section */}
      <div className="nav__logo">
        <a href="/">
          StayHealthy 
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
              </g>
            </g>
          </svg>
        </a>
        <span>.</span>
      </div>

      {/* Navigation icon section with onClick event listener */}
      <div className="nav__icon" onClick={handleClick}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Unordered list for navigation links */}
      <ul className={`nav__links ${isOpen ? 'active' : ''}`}>
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        <li className="link">
          <Link to="/Sign_Up">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <a href="/Login">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
