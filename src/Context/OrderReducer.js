export default (state, action) => {
  switch (action.type) {
    case 'CANCEL_ORDER':
      return {
        ...state,
        Orders: state.Orders.filter((order) => order.id !== action.payload),
      };
    case 'ADD_ORDER':
      console.log('Reducer Call...');
      console.log(action.payload);
      console.log(state.Orders);

      action.payload.forEach((order) => {
        order.dateOrdered = new Date().toLocaleString();
        state.Orders.push(order);
      });

      return state;
    default:
      return state;
  }
};
