import React from 'react';
import './Assets/Style/style.css';

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
import Header from './Components/Header.js';

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
