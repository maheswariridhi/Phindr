import React from 'react';
import { Link } from 'react-router-dom';
import './pprodCat.css';
import productArray from './pproducts';

const PharmacistProdCat = ({ isChecked = {}, searchValue = '' }) => {
  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];
  const visibleBrands = brands.filter((brand) => isChecked[brand]);

  console.log('searchValue:', searchValue);
  const searchInput = searchValue.toLowerCase();

  // Updated filtering logic to include search input
  const filteredProducts = Object.entries(productArray)
    .filter(([key, value]) => visibleBrands.length === 0 || visibleBrands.includes(value.CATEGORY))
    .filter(([key, value]) => value.BRAND.toLowerCase().includes(searchInput))
    .map(([key, value]) => ({ key, ...value }));

  return (
    <div className='parent-product'>
      <h2 className='title'>Phindr&trade; Products</h2>
      <div className='prod-cat'>
        {filteredProducts.map((pproduct) => (
          <Link key={pproduct.ID} to={`/pproduct/${pproduct.ID}`} className='product-container'>
            <div className='item-container'>
              <img
                src={require(`./product-inventory/phab_img/${pproduct.ID}.jpg`)}
                alt={pproduct.BRAND}
                className='item-image'
              />
            </div>
            <div className='item-info'>
              <h3>{`${pproduct.BRAND} ${pproduct.TYPE}`}</h3>
              <p>{pproduct.QTY}</p>
              <h4>£{pproduct.SPRICE.toFixed(2)}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PharmacistProdCat;