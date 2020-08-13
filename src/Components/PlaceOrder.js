// Import React Elements
import React, { useState, useContext, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

// Import the Global Data used to keep track of and add to the list of Orders
import { OrdersContext } from '../Context/OrdersContext';

// Import External Data Sets
import Pizzas from '../Assets/Data/Pizzas.js';
import Toppings from '../Assets/Data/Toppings.js';

// Presents a form where users can add pizzas to an order
// Users will be able to add as many pizzas with the toppings available to their order
// They can choose to cancel their order and start fresh in a new order form
// Adding pizzas will be tracked before the order is fully submitted
// Pricing information will be tracked to update the total cost as pizzas are added or being worked on
function PlaceOrder() {
  // Bring in the global list of Orders and global function to add orders to reference
  const { orders, addOrder } = useContext(OrdersContext);

  // Local variables used to build new orders and submit a new order
  // id = identifier for the order item record as it's added to order
  // orderID = identifier to determine the order number for the order items
  // name = the name the user provides for their order
  // size = the size of the pizza
  // pizzaCost = the cost of the pizza based on its size, used to calculate the total cost
  // toppings = the list of toppings that get added to a pizza
  // toppingsCost = the cost of the toppings when added to a pizza, used to calculate total cost
  // totalCost = the total cost of the order based on the number of pizzas and toppings added
  // newOrder = the order that will be added to the global Order list upon submission
  const [id, setID] = useState(uuid());
  const [orderID, setOrderID] = useState(orders[orders.length - 1].orderID + 1);
  const [name, setOrderName] = useState('');
  const [size, setPizzaSize] = useState('');
  const [pizzaCost, setPizzaCost] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [toppingsCost, setToppingsCost] = useState(0.0);
  const [totalCost, setTotalCost] = useState(0);
  const [newOrder, setNewOrder] = useState([]);

  // Upon clicking the Submit Order button, the order will added to the list of existing Orders
  // The global function from Context will push the new order to the existing Order list
  // An alert is returned confirming the addition of the order
  const submitOrder = (e) => {
    e.preventDefault();
    addOrder(newOrder);
    resetFields();
    alert(`Your Order has been processed: Order #${newOrder[0].orderID}`);
  };

  // This will reset the fields in the order form when an order is submitted or a pizza is added
  // THis is to allow a follow up or new submission of a pizza
  // Values are returned to their initial state or updated to reflect the next order or pizza entry
  const resetFields = () => {
    // Reset fields for resubmission
    document.getElementById('sizeSelect').selectedIndex = 0;
    Toppings.forEach((topping) => {
      document.getElementById(topping.topping).checked = false;
    });
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

  // This will be called as pizzas are added to an order
  // Pizzas will be kept track of in the order before they are fully submitted as a full order
  // It will check to make sure some of the values have been added before adding a pizza to the order
  // Makes sure a name, pizza size, and at least one topping have been provided by the user before it gets added
  // An alert will be triggered if fields are left incomplete or left empty
  // The added pizza will be presented below with the information that was entered for that pizza
  // Fields in the form will be reset to indicate the continuation of adding more pizzas to the order
  const addPizza = (e) => {
    e.preventDefault();

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
      Toppings.forEach((topping) => {
        document.getElementById(topping.topping).checked = false;
      });
      setOrderName(name);
      setPizzaSize('');
      setPizzaCost(0);
      setToppingsCost(0);
      setToppings([]);
      setID(uuid());
    } else {
      alert("Your order can't be processed. Please review and resubmit.");
    }
  };

  // Updates the name field based on the text entered in the form field
  const updateOrderName = (e) => {
    setOrderName(e.target.value);
  };

  // Captures the size of the pizza that was selected
  // To identify the price, it checks against the Pizzas data set and returns the correct price
  // It will then calculate and update the total cost of the pizza
  // It determines if any toppings were added or if a previous pizza was added to adjust the total accordingly
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

  // Captures which toppings were selected to the order and adds it to the pizza
  // To identify the price, it checks against the Toppings data set and returns the correct price
  // It will then calculate and update the total cost of the pizza
  // It determines if any toppings were added or removed to adjust the total cost accordingly
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
                  id={topping.topping}
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
