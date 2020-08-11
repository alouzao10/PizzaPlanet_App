import Orders from '../../Components/Orders';

const orders = [
  {
    id: 100,
    name: 'John Smith',
    size: 'Large',
    toppings: ['Cheese', 'Pepperoni', 'Mushroom'],
    pizzaCost: 10.99,
    totalCost: 10.99,
    dateOrdered: '6/2/2019 6:04 PM',
  },
  {
    id: 101,
    name: 'Bill Allen',
    size: 'Small',
    toppings: ['Cheese'],
    pizzaCost: 7.99,
    totalCost: 16.98,
    dateOrdered: '6/4/2019 5:00 PM',
  },
  {
    id: 101,
    name: 'Bill Allen',
    size: 'Large',
    toppings: ['Cheese'],
    pizzaCost: 7.99,
    totalCost: 16.98,
    dateOrdered: '6/4/2019 5:00 PM',
  },
  {
    id: 102,
    name: 'Diane Jones',
    size: 'Small',
    toppings: ['Cheese', 'Extra Cheese', 'Bacon'],
    pizzaCost: 9.99,
    totalCost: 17.98,
    dateOrdered: '5/31/2019 12:46 PM',
  },
  {
    id: 102,
    name: 'Diane Jones',
    size: 'Small',
    toppings: ['Cheese', 'Onions', 'Peppers'],
    pizzaCost: 7.99,
    totalCost: 17.98,
    dateOrdered: '5/31/2019 12:46 PM',
  },
];

export default Orders;
