import React from 'react';
import { Link } from 'react-router-dom';

import '../Assets/Style/styleHeader.css';

// Import any Images
import pizzaLogo from '../Assets/Images/pizzaPlanetLogo.jpg';

function Header() {
  return (
    <div className='header'>
      <img src={pizzaLogo} className='logo' alt='Pizza Planet' />
      <nav>
        <Link to='/'>
          <button className='navBtn'>Home</button>
        </Link>
        <Link to='/menu'>
          <button className='navBtn'>Menu</button>
        </Link>
        <Link to='/orders'>
          <button className='navBtn'>Orders</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
