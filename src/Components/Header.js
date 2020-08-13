// Import React Elements
import React from 'react';
import { Link } from 'react-router-dom';

// Import External Styling and Image
import '../Assets/Style/styleHeader.css';
import pizzaLogo from '../Assets/Images/pizzaLogo.jpg';

// The Header will be used in each section of the site to provide navigation to other sections
// The Link elements are used along with the Router element to allow navigation into the other sections
// Clicking on the Link will send the path to the URL and load the specified Component into view
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
