import React, { createContext, useState } from 'react';

import Orders from '../Assets/Data/Orders.js';

export const OrdersContext = createContext();

function OrdersProvider(props) {
  const [orders, setOrders] = useState(Orders);

  return (
    <OrdersContext.Provider value={{ orders }}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export default OrdersProvider;
