import React, { useState } from 'react';
import './basket.css'; // Import the CSS file

import samplePic from './item1.png';

function Basket() {
  const [quantities, setQuantities] = useState({});
  
  // Array of product objects
  const products = [
    {
      id: 1,
      name: 'Dettol Hand Sanitizer',
      price: '£5.00',
      size: '500 ml',
    },
    // Add more products as needed
  ];

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  return (
    <div className='Basket-Container'>
      <h1>BASKET</h1>
      <div className='product1-container'>
        {products.map((product) => (
          <div className='quantity-slide' key={product.id}>
            <img src={samplePic} alt={`Picture of ${product.name}`} />
            <div className='prod-info'>
              <div className='row-1'>
                <h2>{product.name}</h2>
                <h5>Quantity: </h5>
                <input
                  type='text'
                  placeholder='Enter quantity'
                  value={quantities[product.id] || ''}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className='qty-input'
                />
              </div>
              <h3>{product.price}</h3>
              <h4>{product.size}</h4>
            </div>
          </div>
        ))}
        <div className='bill-slide'></div>
      </div>
    </div>
  );
}

export default Basket;
