import { React, useState } from 'react';
import './basket.css';
import samplePic from './item1.png';
import productsArray from './products';
import { useAppState } from './AppStateContext';


function Basket() {
  const [quantities, setQuantities] = useState({});
  const { itemAddedToBasket } = useAppState();

  const indexesArray = Object.keys(itemAddedToBasket).map(Number);
  const products = productsArray.filter(product => indexesArray.includes(product.ID));

  console.log(products);

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
          <div className='quantity-slide' key={product.ID}>

            <div className='prod-info'>
              <div className='row-1'>
                <div className='sub-row'>
                  <h2>{product.BRAND} - {product.TYPE}</h2>
                  <h4> &nbsp; &nbsp; ({product.QTY}) </h4>
                </div>

                  <h5>Quantity: </h5>
                  <input
                    type='number'  // Use type 'number'
                    placeholder='Enter quantity'
                    value={quantities[product.ID] || ''}
                    onChange={(e) => handleQuantityChange(product.ID, e.target.value)}
                    className='qty-input'
                  />

              </div>
              <h3>£{product.SPRICE.toFixed(2)}</h3>
              <h4>Serial Number: 100537{product.ID}</h4>
            </div>
          </div>
        ))}
        <div className='bill-slide'>
          
        </div>
      </div>
    </div>
  );
}

export default Basket;
