import React, { useState, useEffect } from 'react'; // Make sure useEffect is imported here
import './basket.css';
import productsArray from '../products';
import { useAppState } from '../AppStateContext';
import Invoice from './invoice';
import ProductItem from './ProductItem';

function Basket() {
  const { itemAddedToBasket, setItemAddedToBasket } = useAppState();

  // Define initialQuantities outside of useState to make it accessible in useEffect
  const initialQuantities = {};
  productsArray.forEach((product) => {
    initialQuantities[product.ID] = 1;
  });

  const [quantities, setQuantities] = useState(initialQuantities);

  useEffect(() => {
    // When the itemAddedToBasket is empty, reset quantities
    if (Object.keys(itemAddedToBasket).length === 0) {
      setQuantities({...initialQuantities}); // Use spread operator to create a new object
    }
  }, [itemAddedToBasket]);

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
