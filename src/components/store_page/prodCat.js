import React from 'react';
import './prodCat.css';
import item1 from './item1.png'

function ProdCat() {
    const handleClick = () => {
        console.log('Button clicked!');
      };
    
    return (
      <div className='prod-cat'>
        <div className='item-container'>
          <img src={item1} alt='Dettol Hand Sanitizer' className='item1' />
        </div>
        <div className='item-info'>
          <h3>Dettol Hand Sanitizer</h3>
          <h3>500ml</h3>
          <h4>£7.00</h4>
          <button onClick={handleClick}>Add to Basket</button>
        </div>
      </div>
    );
  }

export default ProdCat;