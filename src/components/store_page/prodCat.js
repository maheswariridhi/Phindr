import React from 'react';
import './prodCat.css';
import products from './products';

function ProdCat() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='prod-cat'>
      {products.map((product, index) => (
        <div key={product.id} className='product-container'>
          <div className='item-container'>
            {/* Use require with a relative path to dynamically load the image */}
            <img src={require(`./${product.image}`)} alt={product.name} className='item-image' />
          </div>
          <div className='item-info'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <button onClick={handleClick}>Add to Basket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProdCat;