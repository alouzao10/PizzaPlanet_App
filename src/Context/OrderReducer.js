export default (state, action) => {
  switch (action.type) {
    case 'CANCEL_ORDER':
      return {
        ...state,
        Orders: state.Orders.filter((order) => order.id !== action.payload),
      };
    case 'ADD_ORDER':
      return {
        ...state,
        Orders: [action.payload, ...state.Orders],
      };
    default:
      return state;
  }
};
