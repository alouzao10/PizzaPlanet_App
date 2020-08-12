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
    // !REVIEW LOGIC ON EMPTY ORDER AND RESET
    // What needs to be reset/cleared to allow another pizza to be added to the order
    e.preventDefault();
    // add the Pizza to newOrder
    // As Pizzas are added to the order, display the info below the submit
    // Allow the removal of pizzas from the order

    // Check fields if they are empty or incomplete
    // Send an alert that it couldn't be added

    if (name !== '' && size !== '' && toppings.length !== 0) {
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
    } else {
      alert("Your order can't be added. Please review and resubmit.");
    }
  };

  const updateOrderName = (e) => {
    setOrderName(e.target.value);
  };

  // Capture the object values of the selection...
  // Review logic when adding/removing toppings and sizes
  const updatePizza = (e) => {
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
    // If selected add to the Pizza Total and Subtract previous selection from total cost
    if (totalCost > 0) {
      const updatedTotal = totalCost - pizzaCost;
      setTotalCost(updatedTotal + cost);
    } else {
      setTotalCost(cost);
    }
  };

  // !REVIEW CHECKING LOGIC ON RESET
  const updateToppings = (e) => {
    // Get the price of the selected Topping
    const pizzaTopping = e.target.value;
    var cost = 0;
    Toppings.forEach((topping) => {
      if (topping.topping === pizzaTopping) {
        cost = topping.cost;
      }
    });
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
  };

  return (
    <div className=''>
      <h2 className='sectionHeader'>Place your order here...</h2>
      <div className='orderInfo'>
        <form id='orderForm' onSubmit={addPizza}>
          <h2 className='orderNumber'>Order #{orderID}</h2>
          <label className='sectionLabels'>Name: </label>
          <br />
          <input
            className='nameField'
            required
            type='text'
            placeholder='Jon/Jane Doe'
            value={name}
            onChange={updateOrderName}
          />
          <br />
          <label className='sectionLabels'>Pizza Size: </label>
          <br />
          <select
            id='sizeSelect'
            className='selectField'
            onChange={updatePizza}
          >
            <option></option>
            {Pizzas.map((pizza) => (
              <option value={pizza.size}>
                {pizza.size} (${pizza.cost.toFixed(2)})
              </option>
            ))}
          </select>
          <br />
          <label className='sectionLabels'>Toppings: </label>
          {Toppings.map((topping) => (
            <Fragment>
              <br />
              <span className='toppingSelect'>
                <input
                  className='toppingItem'
                  type='checkbox'
                  value={topping.topping}
                  onChange={updateToppings}
                />
                {topping.topping} ***************** ${topping.cost.toFixed(2)}
              </span>
            </Fragment>
          ))}
          <br />
          <h4 className='total'>TOTAL: ${totalCost.toFixed(2)}</h4>
          <input
            className='submitBtn'
            type='submit'
            value='Add Pizza To Order'
          />

          {newOrder.length > 0 ? (
            <span>
              <button className='cancelBtn' onClick={resetFields}>
                Cancel Order
              </button>{' '}
              |{' '}
              <button className='submitBtn' onClick={submitOrder}>
                Submit Order
              </button>
            </span>
          ) : (
            <div></div>
          )}
        </form>
        <hr />
        {newOrder.length > 0 ? (
          <div>
            {newOrder.map((order) => (
              <div key={order.id}>
                <p className='order'>
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
      </div>
    </div>
  );
}

export default PlaceOrder;
