import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './prodCat.css';
import { useAppState } from './AppStateContext';
import productArray from './products';

const ProdCat = ({ isChecked, handleCheckboxChange, searchValue }) => {
  const { itemAddedToBasket, onAddToBasket } = useAppState();

  console.log("Hello" + searchValue);
  const searchInput = searchValue;

  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];

  const visibleBrands = brands.filter((brand) => isChecked[brand]);

  // Conditionally filter products based on whether checkboxes are selected and search input
  const filteredProducts = Object.entries(productArray)
    .filter(([key, value]) => visibleBrands.length === 0 || visibleBrands.includes(value.CATEGORY))
    .filter(([key, value]) => value.BRAND.toLowerCase().includes(searchInput.toLowerCase()))
    .map(([key, value]) => ({ key, ...value }));

  return (
    <div className='parent-product'>
      <h2 className='title'>Phindr&trade; Products</h2>

      <div className='prod-cat'>
        {filteredProducts.map((product) => (
          <div key={product.ID} className='product-container'>
            <div className='item-container'>
              <Link key={product.ID} to={`/product/${product.ID}`}>
                <img
                  src={require(`./product-inventory/phab_img/${product.ID}.jpg`)}
                  alt={product.BRAND}
                  className='item-image'
                />
              </Link>
            </div>

            <div className='item-info'>
              <Link key={product.ID} to={`/product/${product.ID}`}>
                <h3>{`${product.BRAND} ${product.TYPE}`}</h3>
              </Link>
              <p>{product.QTY}</p>
              <h4>£{product.SPRICE.toFixed(2)}</h4>

              {itemAddedToBasket[product.ID] ? (
                <h4 className='addbasket'>Item Added to Basket</h4>
              ) : (
                <button onClick={() => onAddToBasket(product.ID)}>Add to Basket</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdCat;
