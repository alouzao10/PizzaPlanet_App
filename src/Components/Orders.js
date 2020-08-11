import React, { Component } from 'react';

import Header from './Header.js';
import PlaceOrder from './PlaceOrder.js';
import CheckOrder from './CheckOrder.js';

import '../Assets/Style/styleOrders.css';

import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

export class Orders extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='orders'>
          <div className='row'>
            <div className='column'>
              <PlaceOrder />
            </div>
            <div className='column'>
              <CheckOrder />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Orders;
