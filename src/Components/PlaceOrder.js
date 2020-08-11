import React, { useState, useContext, Fragment } from 'react';

import { OrdersContext } from '../Context/OrdersContext';

import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

// Add pizzas to a local state and set an Add button to add to the list
// Keep track of individual pizza base price and the final cost...abs
// Cost of pizza + cost of ingredients = total

// Final order button that will add the order to the main Orders list

function PlaceOrder() {
  // Local variables to check for the order
  const [orderName, setOrderName] = useState('');
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzaCost, setPizzaCost] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [toppingsCost, setToppingsCost] = useState(0);

  const [newOrder, setNewOrder] = useState([]);

  // Bring in the list of Orders to reference
  const { addOrder } = useContext(OrdersContext);

  const submitOrder = (e) => {
    // Submit the full order and add to list of Orders
    // Check if an order exists and alert the user
    // Use UUID to assign an ID and OrderID
    e.preventDefault();
    addOrder(newOrder);
  };

  const addPizza = (e) => {
    e.preventDefault();
    // add the Pizza to newOrder
    // As Pizzas are added to the order, display the info below the submit
    // Allow the removal of pizzas from the order
  };

  const updateOrderName = (e) => {
    setOrderName(e.target.value);
  };

  // Capture the object values of the selection...
  const updatePizza = (e) => {
    console.log(e.target.value.pizza);
    console.log(e.target.value.cost);
    // USE setPizzaSize AND setPizzaCost
  };

  const updateToppings = (e) => {
    console.log(e.target.value.topping);
    console.log(e.target.value.cost);
    // USE setToppings AND setToppingsCost
  };

  return (
    <div>
      <h2>Place your order here...</h2>
      <hr />
      <div className='orderInfo'>
        <form onSubmit={addPizza}>
          <label>Enter your name: </label>
          <br />
          <input
            type='text'
            placeholder='Jon/Jane Doe'
            value={orderName}
            onChange={updateOrderName}
          />
          <br />
          <label>Pizza Size: </label>
          <br />
          <select value={pizzaSize} onChange={updatePizza}>
            <option></option>
            {Pizzas.map((pizza) => (
              <option value={pizza}>
                {pizza.size} (${pizza.cost})
              </option>
            ))}
          </select>
          <br />
          <label>Toppings: </label>
          {Toppings.map((topping) => (
            <Fragment>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={topping}
                  onChange={updateToppings}
                />
                {topping.topping} ***************** ${topping.cost}
              </label>
            </Fragment>
          ))}
          <br />
          <br />
          <input type='submit' value='Add Pizza To Order' />
        </form>
        <hr />
        <button onClick={submitOrder}>Submit Order</button>
      </div>
    </div>
  );
}

export default PlaceOrder;
