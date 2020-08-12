import React from 'react';

import Header from './Header.js';

import '../Assets/Style/styleMenu.css';
import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

import cheesePizza from '../Assets/Images/cheesePizza.jpg';
import pepperoniPizza from '../Assets/Images/pepperoniPizza.jpg';
import supremePizza from '../Assets/Images/supremePizza.jpg';

// Pull in the data from the Pizzas and Toppings list
// Display the data in a menu type format
// Display Images and descriptions of some creation options

function Menu() {
  return (
    <React.Fragment>
      <Header />

      <div className='menu'>
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
    </React.Fragment>
  );
}

export default Menu;
