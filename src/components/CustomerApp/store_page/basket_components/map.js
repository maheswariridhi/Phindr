import React, { useState, useEffect } from 'react';
import './map.css';
import mapIMG from './mapIMG.png';

import { useAppState } from '../AppStateContext';
import productsArray from '../products';

function Map() {
  const { itemAddedToBasket } = useAppState();

  // Assuming itemAddedToBasket is an object with product IDs as keys
  const indexesArray = Object.keys(itemAddedToBasket).map(Number);

  // Filter productsArray based on the IDs in indexesArray
  const products = productsArray.filter((product) => indexesArray.includes(product.ID));

  // Filter products again when the component mounts or whenever indexesArray changes
  const [filteredProductsA, setFilteredProductsA] = useState(
    products.filter((product) => product.CATEGORY === 'First aid')
  );
  const [filteredProductsB, setFilteredProductsB] = useState(
    products.filter((product) => product.CATEGORY === 'Skincare')
  );
  const [filteredProductsC, setFilteredProductsC] = useState(
    products.filter((product) => product.CATEGORY === 'Headaches and pain relief')
  );
  const [filteredProductsD, setFilteredProductsD] = useState(
    products.filter((product) => product.CATEGORY === 'Digestion')
  );
  const [filteredProductsE, setFilteredProductsE] = useState(
    products.filter((product) => product.CATEGORY === 'Allergy')
  );
  const [filteredProductsF, setFilteredProductsF] = useState(
    products.filter((product) => product.CATEGORY === 'Cold and Flu')
  );


  // useEffect hook to re-filter products when indexesArray changes
  useEffect(() => {
    setFilteredProductsA(products.filter((product) => product.CATEGORY === 'First aid'));
    setFilteredProductsB(products.filter((product) => product.CATEGORY === 'Skincare'));
    setFilteredProductsC(products.filter((product) => product.CATEGORY === 'Headaches and pain relief'));
    setFilteredProductsD(products.filter((product) => product.CATEGORY === 'Digestion'));
    setFilteredProductsE(products.filter((product) => product.CATEGORY === 'Allergy'));
    setFilteredProductsF(products.filter((product) => product.CATEGORY === 'Cold and Flu'));
  }, [indexesArray]);


  return (
    <div className='map-container'>
      <div className='grid-container'>
        <div className='map-labelA'>
          <h2>A: First Aid</h2>
          {filteredProductsA.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelB'>
          <h2>B: Skincare</h2>
          {filteredProductsB.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelC'>
          <h2>C: Headaches</h2>
          {filteredProductsC.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelD'>
          <h2>D: Digestion</h2>
          {filteredProductsD.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelE'>
          <h2>E: Allergy</h2>
          {filteredProductsE.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelF'>
          <h2>F: Cold and Flu</h2>
          {filteredProductsF.map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <div className='centered-container'>
        <img src={mapIMG} alt='Phindr Map' className='map-img' />
      </div>
    </div>
  );
}

export default Map;
