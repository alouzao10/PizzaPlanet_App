// The Reducer that will be used to execute the action of what is passed from Context
// Depending on the action it will either Add or Remove an order from the Orders data set
export default (state, action) => {
  switch (action.type) {
    case 'CANCEL_ORDER':
      // Returns a new Orders list where the order to be removed is filtered out based on its orderID
      return {
        ...state,
        Orders: state.Orders.filter(
          (order) => order.orderID !== action.payload
        ),
      };

    case 'ADD_ORDER':
      // The new order is inserted into the existing Orders list
      action.payload.forEach((order) => {
        order.dateOrdered = new Date().toLocaleString();
        state.Orders.push(order);
      });
      return state;

    default:
      return state;
  }
};
