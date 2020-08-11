import React, { useState, useContext } from 'react';

import { OrdersContext } from '../Context/OrdersContext';

// Return the Order information based on the Order ID

function CheckOrder() {
  // Local variables to check for the order
  const [orderID, setOrderID] = useState(0);
  const [userOrder, setUserOrder] = useState([]);

  // Bring in the list of Orders to reference
  const { orders } = useContext(OrdersContext);

  const checkOrder = (e) => {
    e.preventDefault();
    setUserOrder(orders.filter((order) => order.orderID === parseInt(orderID)));
  };

  const updateOrderID = (e) => {
    setOrderID(e.target.value);
  };

  return (
    <div>
      <h2>Check your order status here...</h2>
      <hr />
      <form onSubmit={checkOrder}>
        <input
          type='text'
          placeholder='####'
          value={orderID}
          onChange={updateOrderID}
        />
        <input type='submit' value='Check Order' />
      </form>
      {userOrder.length > 0 ? (
        <div className='orderInfo'>
          <h3>
            {userOrder[0].name}, Order ID: {userOrder[0].orderID}
          </h3>
          {userOrder.map((order) => (
            <div key={order.id}>
              <p>
                Pizza Size: {order.size} <br />
                Added Toppings:{' '}
                {order.toppings.map((topping) => (
                  <span>{topping} </span>
                ))}
                <br />
                Pizza Cost: ${order.pizzaCost} <br />
              </p>
            </div>
          ))}
          <h4>
            TOTAL: ${userOrder[0].totalCost}, Ordered On:{' '}
            {userOrder[0].dateOrdered}
          </h4>
        </div>
      ) : (
        <div>
          <h3>No Order Has Been Placed</h3>
        </div>
      )}
    </div>
  );
}

export default CheckOrder;
