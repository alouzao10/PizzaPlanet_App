import React, { Component } from 'react';

import Header from './Header.js';
import PlaceOrder from './PlaceOrder.js';
import CheckOrder from './CheckOrder.js';

import '../Assets/Style/styleOrders.css';

import secondaryPizzaLogo from '../Assets/Images/secondaryPizzaLogo.jpg';

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
