/*
Developed By: Alex Louzao
Date: 8/13/2020
Description: A Pizza site where you can view some information with abilities to add and view orders.
Created Using: HTML, CSS, JS, React

SITE GOAL: Create a Pizza Ordering Site
Include the following on the site:
  1) A page to display existing and placed orders
  2) Ability to place new orders
    - 1 to X Pizzas
    - 1 to X Toppings
  3) Pull data from the sample data set
    - Set in an external file that will be set to some global state
    - Update values from the data set/state by adding orders
*/

// Import React Elements
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components
import Home from './Components/Home.js';
import Menu from './Components/Menu.js';
import Orders from './Components/Orders.js';

// Import the Global Order Data using Context
import { OrdersProvider } from './Context/OrdersContext.js';

// Use of Routes to navigate between the different sections of the site
// The Home Components is the default view for the site
// The Data Provider passes the Order data globally to be accessed through out the site
// Navigation into the other sections of the site are done through the Route element
// Routes into the other components are specified by their paths
function App() {
  return (
    <OrdersProvider>
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/menu' component={Menu}></Route>
        <Route exact path='/orders' component={Orders}></Route>
      </Router>
    </OrdersProvider>
  );
}

export default App;
