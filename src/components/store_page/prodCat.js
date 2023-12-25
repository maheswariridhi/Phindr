import React from 'react';
import './prodCat.css';
import productArray from './products';

function ProdCat({ isChecked, handleCheckboxChange }) {
  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];
  
  const visibleBrands = brands.filter((brand) => isChecked[brand]);

  // Conditionally filter products based on whether checkboxes are selected
  const products = Object.entries(productArray)
    .filter(([key, value]) => visibleBrands.length === 0 || visibleBrands.includes(value.CATEGORY))
    .map(([key, value]) => ({ key, ...value }));
  
  console.log(visibleBrands);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='parent-product'>
      <h8 className = 'title'>Phindr&trade; Products</h8>
      <div className='prod-cat'>
        {products.map((product, index) => (
          <div key={product.ID} className='product-container'>
            <div className='item-container'>
              {/* Use require with a relative path to dynamically load the image */}
              <img src={require(`./product-inventory/phab_img/${product.ID}.jpg`)} alt={product.BRAND} className='item-image' />
            </div>
            <div className='item-info'>
              <h3>{product.BRAND} {product.TYPE}</h3>
              <p>{product.QTY}</p>
              <h4>£{product.SPRICE.toFixed(2)}</h4>
              <button onClick={handleClick}>Add to Basket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdCat;