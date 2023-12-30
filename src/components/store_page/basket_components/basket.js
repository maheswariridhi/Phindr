import React, { useState } from 'react';
import './basket.css';

import productsArray from '../products';
import { useAppState } from '../AppStateContext';

import Invoice from './invoice';
import ProductItem from './ProductItem'; // Import the new component

function Basket() {
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};

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
        [productId]: Math.max(0, value),
      };

      if (limit === 1 && newQuantities[productId] > 1) {
        newQuantities[productId] = 1;
      }

      return newQuantities;
    });
  };

  return (
    <div className='Basket-Container'>
      <h1>BASKET</h1>


      <div className='product1-container'>

        <div>
          {products.map((product) => (
            <ProductItem
              key={product.ID}
              product={product}
              quantity={quantities[product.ID]}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <Invoice products={products} quantities={quantities} />
      </div>
    </div>
  );
}

export default Basket;
