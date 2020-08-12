import React, { useState, useContext } from 'react';

import { OrdersContext } from '../Context/OrdersContext';

import PizzaGuard from '../Assets/Images/pizzaGuard.jpg';

// Return the Order information based on the Order ID

function CheckOrder() {
  // Local variables to check for the order
  const [orderID, setOrderID] = useState(0);
  const [userOrder, setUserOrder] = useState([]);

  // Bring in the list of Orders to reference
  const { orders } = useContext(OrdersContext);

  const checkOrder = (e) => {
    e.preventDefault();
    console.log(orders);
    setUserOrder(orders.filter((order) => order.orderID === parseInt(orderID)));
  };

  const updateOrderID = (e) => {
    setOrderID(e.target.value);
  };

  return (
    <div>
      <h2 className='sectionHeader'>Check your order information here...</h2>
      <form className='checkOrder' onSubmit={checkOrder}>
        <input
          className='orderIDField'
          type='text'
          placeholder='####'
          onChange={updateOrderID}
        />
        <input className='submitBtn' type='submit' value='Check Order' />
      </form>
      {userOrder.length > 0 ? (
        <div className='orderInfo'>
          <h3 className=''>
            {userOrder[0].name}, Order #{userOrder[0].orderID}
          </h3>
          <div>
            {userOrder.map((order) => (
              <p className='order' key={order.id}>
                Pizza Size: {order.size} <br />
                Added Toppings:{' '}
                {order.toppings.map((topping) => (
                  <span>{topping} </span>
                ))}
                <br />
                Pizza Cost: ${order.pizzaCost} <br />
              </p>
            ))}
          </div>
          <h4 className='totalOrder'>
            TOTAL: ${userOrder[userOrder.length - 1].totalCost}, Ordered On:{' '}
            {userOrder[0].dateOrdered}
          </h4>
        </div>
      ) : (
        <div className='noOrder'>
          <h1>No Order Has Been Placed</h1>
          <img className='guardImage' src={PizzaGuard} />
        </div>
      )}
    </div>
  );
}

export default CheckOrder;
