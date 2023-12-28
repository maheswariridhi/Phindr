import React, { useState } from 'react';
import './basket.css';
import samplePic from './item1.png';
import productsArray from './products';
import { useAppState } from './AppStateContext';

import Invoice from './invoice';

function Basket() {
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};

    // Initialize quantities for each product with 0
    productsArray.forEach((product) => {
      initialQuantities[product.ID] = 0;
    });

    return initialQuantities;
  });

  const { itemAddedToBasket } = useAppState();

  const indexesArray = Object.keys(itemAddedToBasket).map(Number);
  const products = productsArray.filter((product) => indexesArray.includes(product.ID));

  const handleQuantityChange = (productId, value, limit) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [productId]: Math.max(0, value), // Ensure the quantity is at least 0
      };
  
      // Check if product.LIMIT is equal to 1 and value is greater than 1
      if (limit === 1 && newQuantities[productId] > 1) {
        // Limit the quantity to 1
        newQuantities[productId] = 1;
      }
  
      return newQuantities;
    });
  };

  console.log(products);

  return (
    <div className='Basket-Container'>
      <h1>BASKET</h1>
      <div className='product1-container'>
        {products.map((product) => (
          <div className='quantity-slide' key={product.ID}>
            <div className='prod-info'>
              <div className='row-1'>
                <div className='sub-row'>
                  <h2>
                    {product.BRAND} - {product.TYPE}
                  </h2>
                  <h4> &nbsp; &nbsp; ({product.QTY}) </h4>
                </div>
                <h5>Quantity: </h5>
                <input
                  type='number' // Use type 'number'
                  placeholder='Enter quantity'
                  value={quantities[product.ID]}
                  onChange={(e) =>
                    handleQuantityChange(product.ID, e.target.value, product.LIMIT)
                  }
                  className='qty-input'
                />
              </div>
              <h3>£{product.SPRICE.toFixed(2)}</h3>
              <h4>Serial Number: 100537{product.ID}</h4>
            </div>
          </div>
        ))}

        <Invoice products={products} quantities={quantities} />
      </div>
    </div>
  );
}

export default Basket;
