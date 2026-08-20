import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="nav__bar">
        <div className="nav__logo">
          <a href="/">StayHealthy</a>
        </div>
        <div className="nav__icon">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M380.441,184.087c-5.345-4.558-13.287-3.922-17.845,1.423c-26.65,31.258-65.419,49.197-106.596,49.197 c-41.178,0-79.946-17.939-106.596-49.197c-4.558-5.345-12.5-5.981-17.845-1.423c-5.345,4.559-5.982,12.5-1.423,17.845 c31.144,36.526,76.435,57.477,125.864,57.477c49.429,0,94.72-20.951,125.864-57.477 C386.423,196.587,385.786,188.646,380.441,184.087z" />
                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,482.667 c-125.013,0-226.667-101.653-226.667-226.667S130.987,29.333,256,29.333S482.667,130.987,482.667,256 S381.013,482.667,256,482.667z" />
              </g>
            </g>
          </svg>
        </div>
        <nav className="nav__links">
          <ul>
            <li><a href="/">Sign Up</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;