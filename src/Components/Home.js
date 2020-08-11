import React from 'react';

import '../Assets/Style/styleHome.css';
import Building from '../Assets/Images/pizzaPlanetBuilding.jpg';
import Aliens from '../Assets/Images/aliens.jpg';
import DeliveryTruck from '../Assets/Images/deliveryTruck.jpg';
import Ingredients from '../Assets/Images/ingredients.jpg';

import Header from './Header.js';

// Display a welcome message with some images and text
// Display specials or quick options

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className='home'>
        <h1>Welcome to Pizza Planet!</h1>
        <div className='row'>
          <div className='column content'>
            <h2 className='contentHeader'>OUT OF THIS WORLD PIZZA</h2>
            <p>Place Content Here...Welcome Message, Mission Statement</p>
          </div>
          <div className='column'>
            <img src={Building} className='images' alt='building' />
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <img src={Ingredients} className='images' alt='building' />
          </div>
          <div className='column content'>
            <h2 className='contentHeader'>OUR GALACTIC GUARANTEE</h2>
            <p>Place Content Here...Quality, Ingredients, Promise</p>
          </div>
        </div>
        <div className='row'>
          <div className='column content'>
            <h2 className='contentHeader'>LIGHT-SPEED DELIVERY</h2>
            <p>Place Content Here...Delivery, Procedure, Best in business</p>
          </div>
          <div className='column'>
            <img src={DeliveryTruck} className='images' alt='building' />
          </div>
        </div>
        <div>
          <h1>We hope to see you soon...</h1>
          <img src={Aliens} className='aliensImg' alt='aliens' />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
