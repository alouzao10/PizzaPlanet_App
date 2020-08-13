// Import React
import React from 'react';

// Import External Styling, Images, and Data sets
import '../Assets/Style/styleMenu.css';
import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';
import cheesePizza from '../Assets/Images/cheesePizza.jpg';
import pepperoniPizza from '../Assets/Images/pepperoniPizza.jpg';
import supremePizza from '../Assets/Images/supremePizza.jpg';

// Import Component
import Header from './Header.js';

// Display the data provided by the Pizzas and Toppings Data sets
// Loops through each set to display the item name and cost for each record
// Formats the cost to ensure the 2 decimal places are visible from the record
// The Header is included to allow navigation into the other sections of the site
function Menu() {
  return (
    <div className='menu'>
      <Header />
      <div className='rowMenu'>
        <img className='pizzaImages' src={cheesePizza} alt='cheesePizza' />
        <img
          className='pizzaImages'
          src={pepperoniPizza}
          alt='pepperoniPizza'
        />
        <img className='pizzaImages' src={supremePizza} alt='supremePizza' />
      </div>
      <div className='rowMenu'>
        <div className='column menuItems'>
          <h2 className='menuHeaders'>Pizzas</h2>
          {Pizzas.map((pizza) => (
            <p className='menuItem'>{pizza.size}</p>
          ))}
        </div>
        <div className='column menuItems'>
          <h2 className='menuHeaders'>Cost</h2>
          {Pizzas.map((pizza) => (
            <p className='menuItem'>${pizza.cost.toFixed(2)}</p>
          ))}
        </div>
      </div>
      <div className='rowMenu'>
        <div className='column menuItems'>
          <h2 className='menuHeaders'>Toppings</h2>
          {Toppings.map((topping) => (
            <p className='menuItem'>{topping.topping}</p>
          ))}
        </div>
        <div className='column menuItems'>
          <h2 className='menuHeaders'>Cost</h2>
          {Toppings.map((topping) => (
            <p className='menuItem'>${topping.cost.toFixed(2)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
