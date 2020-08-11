import React, { Component } from 'react';

import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

export class PlaceOrder extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Place your order here...</h2>
      </div>
    );
  }
}

export default PlaceOrder;
