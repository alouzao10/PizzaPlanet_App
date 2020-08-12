import React, { createContext, useReducer } from 'react';

import Orders from '../Assets/Data/Orders.js';
import OrderReducer from './OrderReducer.js';

const initialState = {
  Orders,
};

export const OrdersContext = createContext(initialState);

export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  // Actions / Global Functions
  function cancelOrder(id) {
    dispatch({
      type: 'CANCEL_ORDER',
      payload: id,
    });
  }

  function addOrder(newOrder) {
    console.log('Context Call...');
    console.log(newOrder);
    dispatch({
      type: 'ADD_ORDER',
      payload: newOrder,
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
