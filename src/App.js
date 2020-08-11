import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// TODO:
/*
! SITE GOAL: Create a Pizza Ordering Site
Include the following on the site:
*   1) A page to display existing and placed orders
*   2) Ability to place new orders
    - 1 to X Pizzas
    - 1 to X Toppings
*   3) Pull data from the sample data set
    - Set in an external file that will be set to some state
    - Update values from the data set/state
*/

// My Comments:
/*
  Manage State using Context/Redux
  Use Routes to navigate between different sections 
    Home / Menu / Orders / Place Order
  Apply style to mimic other pizza apps
  
*/

// Import Components
import Home from './Components/Home.js';
import Menu from './Components/Menu.js';
import Orders from './Components/Orders.js';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/menu' component={Menu}></Route>
      <Route exact path='/orders' component={Orders}></Route>
    </Router>
  );
}

export default App;
