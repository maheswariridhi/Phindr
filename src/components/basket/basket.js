import React from 'react';
import './basket.css'; // Import the CSS file

import samplePic from './item1.png'

function Basket() {
    return(
        <div className='Basket-Container'>
            <h1>BASKET</h1>
            <div className='product1-container'>
                <div className='quantity-slide'>
                    <img src={samplePic}/>
                    <h2>Dettol Hand Sanitizer</h2>
                    <h5>Quantity</h5>
                    <h3>£5.00</h3>
                    <h4>500 ml</h4>
                </div>
                <div className='bill-slide'>

                </div>
            </div>
            
        </div>
  );
}

export default Basket;
