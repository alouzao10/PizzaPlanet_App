import React, { useState, useContext, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

import { OrdersContext } from '../Context/OrdersContext';

import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

// Add pizzas to a local state and set an Add button to add to the list
// Keep track of individual pizza base price and the final cost...abs
// Cost of pizza + cost of ingredients = total

// Final order button that will add the order to the main Orders list

function PlaceOrder() {
  // Bring in the list of Orders to reference
  const { orders, addOrder } = useContext(OrdersContext);

  // Local variables to check for the order
  const [id, setID] = useState(uuid());
  const [orderID, setOrderID] = useState(orders[orders.length - 1].orderID + 1);
  const [name, setOrderName] = useState('');
  const [size, setPizzaSize] = useState('');
  const [pizzaCost, setPizzaCost] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [toppingsCost, setToppingsCost] = useState(0.0);
  const [totalCost, setTotalCost] = useState(0);

  const [newOrder, setNewOrder] = useState([]);

  const submitOrder = (e) => {
    // Submit the full order and add to list of Orders
    // Check if an order exists and alert the user
    // Use UUID to assign an ID and OrderID
    e.preventDefault();
    addOrder(newOrder);
    resetFields();
  };

  const resetFields = () => {
    // Reset fields for resubmission
    document.getElementById('sizeSelect').selectedIndex = 0;
    document.getElementById('orderForm').reset();
    setOrderName('');
    setPizzaSize('');
    setPizzaCost(0);
    setToppingsCost(0);
    setToppings([]);
    setTotalCost(0);
    setNewOrder([]);
    setID(uuid());
    setOrderID(orderID + 1);
  };

  const addPizza = (e) => {
    // !REVIEW LOGIC
    // What needs to be reset/cleared to allow another pizza to be added to the order
    e.preventDefault();
    // add the Pizza to newOrder
    // As Pizzas are added to the order, display the info below the submit
    // Allow the removal of pizzas from the order
    newOrder.push({
      id,
      orderID,
      name,
      size,
      toppings,
      pizzaCost,
      toppingsCost,
      totalCost,
      dateOrdered: '',
    });
    console.log(newOrder);
    // Reset Fields on Adding a new Pizza to the Order
    document.getElementById('sizeSelect').selectedIndex = 0;
    document.getElementById('orderForm').reset();
    setOrderName(name);
    setPizzaSize('');
    setPizzaCost(0);
    setToppingsCost(0);
    setToppings([]);
    setID(uuid());
    //setPizzaTotal(0); // Update the total in all records of an order on the next addition
  };

  const updateOrderName = (e) => {
    setOrderName(e.target.value);
  };

  // Capture the object values of the selection...
  // Review logic when adding/removing toppings and sizes
  const updatePizza = (e) => {
    console.log(e.target.value);

    const size = e.target.value;
    var cost = 0;
    // Determine Pizza Cost based on size
    Pizzas.forEach((pizza) => {
      if (pizza.size === size) {
        cost = pizza.cost;
        setPizzaSize(size);
        setPizzaCost(cost);
      }
    });
    // !REVIEW LOGIC
    // If selected add to the Pizza Total and Subtract from previous cost
    if (totalCost > 0) {
      const updatedTotal = totalCost - pizzaCost;
      setTotalCost(updatedTotal + cost);
    } else {
      setTotalCost(cost);
    }
  };

  const updateToppings = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    // Get the price of the selected Topping
    const pizzaTopping = e.target.value;
    var cost = 0;
    Toppings.forEach((topping) => {
      if (topping.topping === pizzaTopping) {
        cost = topping.cost;
      }
    });
    // !REVIEW LOGIC
    const checkedTopping = e.target.checked;
    if (checkedTopping) {
      // Add Topping
      toppings.push(pizzaTopping);
      // Add Topping Costs To Totals
      setToppingsCost(toppingsCost + cost);
      setTotalCost(totalCost + cost);
    } else {
      // Check if Topping was Added and Remove Topping
      const index = toppings.indexOf(pizzaTopping);
      if (index > -1) {
        toppings.splice(index, 1);
        // Subtract Topping Costs From Totals
        setToppingsCost(toppingsCost - cost);
        setTotalCost(totalCost - cost);
      }
    }
    // USE setToppings AND setToppingsCost
  };

  return (
    <div>
      <h2>Place your order here...</h2>
      <hr />
      <div className='orderInfo'>
        <form id='orderForm' onSubmit={addPizza}>
          <h4>Order #{orderID}</h4>
          <label>Enter your name: </label>
          <br />
          <input
            required
            type='text'
            placeholder='Jon/Jane Doe'
            value={name}
            onChange={updateOrderName}
          />
          <br />
          <label>Pizza Size: </label>
          <br />
          <select id='sizeSelect' onChange={updatePizza}>
            <option></option>
            {Pizzas.map((pizza) => (
              <option value={pizza.size}>
                {pizza.size} (${pizza.cost.toFixed(2)})
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
                  className='toppingSelect'
                  type='checkbox'
                  value={topping.topping}
                  onChange={updateToppings}
                />
                {topping.topping} ***************** ${topping.cost.toFixed(2)}
              </label>
            </Fragment>
          ))}
          <br />
          <h4>TOTAL: ${totalCost.toFixed(2)}</h4>
          <input type='submit' value='Add Pizza To Order' />
          <button onClick={resetFields}>Cancel Order</button>
        </form>
        <hr />
        {newOrder.length > 0 ? (
          <div>
            {newOrder.map((order) => (
              <div key={order.id}>
                <p>
                  Pizza Size: {order.size} <br />
                  Added Toppings:{' '}
                  {order.toppings.map((topping) => (
                    <span>{topping} </span>
                  ))}
                  <br />
                  Toppings Cost: ${order.toppingsCost.toFixed(2)} <br />
                  Pizza Cost: ${order.pizzaCost.toFixed(2)} <br />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>No Pizzas Added</h3>
          </div>
        )}

        <hr />
        <button onClick={submitOrder}>Submit Order</button>
      </div>
    </div>
  );
}

export default PlaceOrder;
