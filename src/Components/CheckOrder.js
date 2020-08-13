// Import React Elements
import React, { useState, useContext } from 'react';

// Import the Global Data used to keep track of and add to the list of Orders
import { OrdersContext } from '../Context/OrdersContext';

// Import Images
import PizzaGuard from '../Assets/Images/pizzaGuard.jpg';

// You can search for existing and placed orders by entering your Order ID
// It will take the entered id provided by the user and filter results if any order exists
// If an order exists it will display that information in the space below
// If no order exists then an error message will appear
function CheckOrder() {
  // Bring in the global list of Orders and global function to remove an order to reference
  const { orders, cancelOrder } = useContext(OrdersContext);

  // Local variables
  // orderID = the entered id from the user to search in the Orders data set
  // userOrder = the returned order information based on the orderID
  const [orderID, setOrderID] = useState(0);
  const [userOrder, setUserOrder] = useState([]);

  // After entering the order id and pressing the enter key or the check button it will filter results based on the orderID
  // It will filter the Orders and assign what is returned to the userOrder array
  // It will either contain an order or be left empty
  const checkOrder = (e) => {
    e.preventDefault();
    console.log(orders);
    setUserOrder(orders.filter((order) => order.orderID === parseInt(orderID)));
  };

  // Called when clicking the Cancel Order button
  // It will return a new Order list where that order has been filtered out
  // Makes sure the user wants to remove their order through a confirmation prompt
  const removeOrder = (orderID) => {
    if (window.confirm('Would you like to cancel your order?')) {
      cancelOrder(orderID);
      setUserOrder([]);
    }
  };

  // Update the id value that will be used to search for and return the order should one exist
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
                Pizza Cost: ${order.pizzaCost.toFixed(2)} <br />
              </p>
            ))}
          </div>
          <h4 className='totalOrder'>
            TOTAL: ${userOrder[userOrder.length - 1].totalCost.toFixed(2)},
            Ordered On: {userOrder[0].dateOrdered}
          </h4>
          <button
            className='removeBtn'
            onClick={() => removeOrder(userOrder[0].orderID)}
          >
            Cancel Order
          </button>
        </div>
      ) : (
        <div className='noOrder'>
          <h1>No Order Has Been Placed</h1>
          <img className='guardImage' src={PizzaGuard} alt='PizzaGuard' />
        </div>
      )}
    </div>
  );
}

export default CheckOrder;
