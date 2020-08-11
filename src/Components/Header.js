import React from 'react';

// Import any Images
import pizzaLogo from '../Assets/Images/pizzaPlanetLogo.jpg';

function Header() {
  return (
    <div>
      <h1>Welcome to Pizza Planet</h1>
      <img src={pizzaLogo} />
    </div>
  );
}

export default Header;
