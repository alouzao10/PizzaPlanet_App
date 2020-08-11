import React, { Component } from 'react';

import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

export class CheckOrder extends Component {
  constructor() {
    super();
    this.state = { orderID: 0 };

    this.setOrderID = this.setOrderID.bind(this);
    this.checkOrder = this.checkOrder.bind(this);
  }

  setOrderID(e) {
    this.setState({ orderID: e.target.value });
  }

  checkOrder(e) {
    e.preventDefault();
    // Search for the order based on the given ID
    // Display the order information underneath the section
  }
  render() {
    return (
      <div>
        <h2>Check your order status here...</h2>
        <form onSubmit={this.checkOrder}>
          <label>Enter your order number: </label>
          <input
            type='text'
            placeholder='####'
            value={this.state.orderID}
            onChange={this.setOrderID}
          />
          <input type='submit' value='Check Order' />
        </form>
        <div>
          <h3>Your Order:</h3>
        </div>
      </div>
    );
  }
}

export default CheckOrder;
