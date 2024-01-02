import React, { useEffect, useState } from 'react';
import './basket.css';
import './invoice.css';

import { useHistory } from 'react-router-dom';

function Invoice({ products, quantities }) {
  const [randomSerialNumber, setRandomSerialNumber] = useState('');

  useEffect(() => {
    // Generate the random serial number once when the component mounts
    const generateRandomSerialNumber = () => {
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      return '100537' + randomNumber;
    };

    setRandomSerialNumber(generateRandomSerialNumber());
  }, []); // The empty dependency array ensures this effect runs only once

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${day}/${month}/${year}`;

  // Initialize total cost
  let totalCost = 0;

  const history = useHistory();

  const handleClick = () => {
    history.push('/store-checkout');
  };

  const handleClick1 = () => {
    history.push('/checkout');
  };

  return (
    <div className='invoice-container'>
      <div>
        <h1>Phindr Ltd.</h1>
        <h2>{formattedDate}</h2>
      </div>

      <p>#{randomSerialNumber}</p>

      <div className='product-invoice'>
        {products.map((product) => {
          // Calculate the total price for the current product
          const totalPrice = Number(product.SPRICE) * quantities[product.ID];

          // Add the current product's total price to the overall total cost
          totalCost += totalPrice;

          return (
            <div key={product.ID} className='test-class'>
              <div className='invoice-r1'>
                <p>
                  {product.BRAND} - {product.TYPE}
                </p>
                <p>Total Price: £{totalPrice.toFixed(2)}</p>
              </div>
              <p>Quantity: {quantities[product.ID]}</p>
            </div>
          );
        })}
      </div>

      <div className='total-cost'>
        <p>Total Cost: £{totalCost.toFixed(2)}</p>
      </div>

      <button className='my-button' onClick={handleClick}>
        Collect from Store
      </button>

      <button className='my-button' onClick={handleClick1}>
        Online Checkout
      </button>
    </div>
  );
}

export default Invoice;
