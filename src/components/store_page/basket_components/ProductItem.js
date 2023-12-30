// ProductItem.js

import React from 'react';

const ProductItem = ({ product, quantity, handleQuantityChange }) => {
  return (
    <div className='quantity-slide' key={product.ID}>
      <div className='prod-info-container'>
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
              type='number'
              placeholder='Enter quantity'
              value={quantity}
              onChange={(e) => handleQuantityChange(product.ID, e.target.value, product.LIMIT)}
              className='qty-input'
            />
          </div>
          <h3>£{product.SPRICE.toFixed(2)}</h3>
          <h4>Serial Number: 100537{product.ID}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;