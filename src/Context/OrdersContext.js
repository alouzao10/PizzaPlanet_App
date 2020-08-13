// Import React Elements
import React, { createContext, useReducer } from 'react';

// Import the Orders Data Set
import Orders from '../Assets/Data/Orders.js';

// Import the Reducer to execute actions based on what is passed
import OrderReducer from './OrderReducer.js';

// Set up the initial state containing the existing Orders
const initialState = {
  Orders,
};

// Set up Context to use the Orders globally and execute actions
export const OrdersContext = createContext(initialState);

// Set up the Provider to pass the Orders and any functions down to the Components
export const OrdersProvider = ({ children }) => {
  // Set up a Reducers to execute actions on the Orders for adding/removing orders
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  // Actions / Global Functions used to call the action within the Reducer and update the Orders state
  // Will add a new order to the Orders list
  // Passes in an array of objects containing the pizza(s) for the order
  function addOrder(newOrder) {
    dispatch({
      type: 'ADD_ORDER',
      payload: newOrder,
    });
  }

  // Will filter out and return a new Orders list
  // Passes in the orderID of the order to filter out from the Orders list
  function cancelOrder(orderID) {
    dispatch({
      type: 'CANCEL_ORDER',
      payload: orderID,
    });
  }

  return (
    <OrdersContext.Provider
      value={{ orders: state.Orders, cancelOrder, addOrder }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
