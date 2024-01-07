import React, { useState, useEffect, useMemo } from 'react';
import './map.css';
import mapIMG from './mapIMG.png';

import { useAppState } from '../AppStateContext';
import productsArray from '../products';

function Map() {
  const { itemAddedToBasket } = useAppState();
  const indexesArray = Object.keys(itemAddedToBasket).map(Number);
  const products = productsArray.filter((product) => indexesArray.includes(product.ID));

  const filteredProducts = useMemo(() => {
    return {
      'First aid': products.filter((product) => product.CATEGORY === 'First aid'),
      'Skincare': products.filter((product) => product.CATEGORY === 'Skincare'),
      'Headaches and pain relief': products.filter((product) => product.CATEGORY === 'Headaches and pain relief'),
      'Digestion': products.filter((product) => product.CATEGORY === 'Digestion'),
      'Allergy': products.filter((product) => product.CATEGORY === 'Allergy'),
      'Cold and Flu': products.filter((product) => product.CATEGORY === 'Cold and Flu'),
    };
  }, [indexesArray, products]);

  return (
    <div className='map-container'>
      <div className='grid-container'>
        <div className='map-labelA'>
          <h2>A: First Aid</h2>
          {filteredProducts['First aid'] && filteredProducts['First aid'].map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelB'>
          <h2>B: Skincare</h2>
          {filteredProducts['Skincare'] && filteredProducts['Skincare'].map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelC'>
          <h2>C: Headaches</h2>
          {filteredProducts['Headaches and pain relief'] && filteredProducts['Headaches and pain relief'].map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelD'>
          <h2>D: Digestion</h2>
          {filteredProducts['Digestion'] && filteredProducts['Digestion'].map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelE'>
          <h2>E: Allergy</h2>
          {filteredProducts['Allergy'] && filteredProducts['Allergy'].map((product) => (
            <div key={product.ID}>
              <p>{product.BRAND} {product.TYPE}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className='map-labelF'>
          <h2>F: Cold and Flu</h2>
          {filteredProducts['Cold and Flu'] && filteredProducts['Cold and Flu'].map((product) => (
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
