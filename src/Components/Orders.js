// Import React Element
import React from 'react';

// Import External Styling
import '../Assets/Style/styleOrders.css';

// Import Components
import Header from './Header.js';
import PlaceOrder from './PlaceOrder.js';
import CheckOrder from './CheckOrder.js';

// The Order page is broken up into 2 parts
// You can place an order under the PlaceOrder Component
// You can search for existing orders under the CheckOrder Component
function Orders() {
  return (
    <div className='orders'>
      <Header />
      <div className='row'>
        <div className='column'>
          <PlaceOrder />
        </div>
        <div className='column'>
          <CheckOrder />
        </div>
      </div>
    </div>
  );
}

export default Orders;
