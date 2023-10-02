// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">My Portfolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;