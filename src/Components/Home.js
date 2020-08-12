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
        <div className='rowHome'>
          <div className='column content'>
            <h2 className='contentHeader'>OUT OF THIS WORLD PIZZA</h2>
            <p className='contentTxt'>
              Serving the galaxy one slice at a time. We are the universe's
              go-to spot for all of your pizza needs. Come visit our family and
              alien friendly eating establishments with full scale arcade,
              spacious dining rooms, and top of the line service. We have live
              entertainment nightly with special guests from astronauts and
              famous extraterrestrials.
            </p>
          </div>
          <div className='column'>
            <img src={Building} className='images' alt='building' />
          </div>
        </div>
        <div className='rowHome'>
          <div className='column'>
            <img src={Ingredients} className='images' alt='building' />
          </div>
          <div className='column content'>
            <h2 className='contentHeader'>OUR GALACTIC GUARANTEE</h2>
            <p className='contentTxt'>
              Only at Pizza Planet will you find the best quality ingredients
              used in our pizzas. We source our products from local moon farmers
              and explore new ones not yet discovered from distant worlds. Every
              bite you take will be full of flavor with our pizzas always made
              fresh, to your specifications, and never frozen like those other
              guys.
              <br />
              <br />
              Your taste buds will be launched out of this world, and you will
              be back before you know it for more!
            </p>
          </div>
        </div>
        <div className='rowHome'>
          <div className='column content'>
            <h2 className='contentHeader'>DELIVERY AT THE SPEED OF LIGHT</h2>
            <p className='contentTxt'>
              Unable to visit one of our establishments, feel free to place an
              order using the provided link and our delivery team will be on its
              way at the speed of light.
              <br />
              <br />
              Our delivery fleet uses the latest and greatest technology to
              deliver your pizza safely and efficiently. If your pizza arrives
              in over a lightyear, it's on us!
            </p>
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
