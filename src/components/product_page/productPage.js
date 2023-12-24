//import React, { useEffect, useState } from 'react';
import './productPage.css';
import location from '../navbar/location.png';

const ProductPage = () => {


  return (
    <div>
      <div className="grid-top-product">
        {/* Brand Info on the Left */}
        <div>
          <div>
            <img src="../store_pageitem1.png" className="image-top image mx-auto d-block" alt="Product 1" />
          </div>
        </div>

        <div className='middle-product'>
          <h1 className="products-title">Product Name</h1>
          <h3 className="title-smaller">£</h3>
          <p className="text-product">avaliable:</p>
          <button className="buttons-product">Add to Basket</button>

          <p className="text-product" style={{paddingTop: 10}}>
            <img src={location} className="location-product" alt="location" />
            Find in store 
          </p>
          
          
        </div>
      </div>

      <hr className="solid" />


      <div class="grid-bottom-product">
        <div class="grid-item-product">
          <p className="text-product">Product details:</p>
          <p className="small-text-product">xxx</p>
        </div>

        <div class="grid-item-product">
          <p className="text-product">Ingredients:</p>
          <p className="small-text-product">xxx</p>
        </div>

        <div class="grid-item-product">
          <p className="text-product">Contraindications:</p>
          <p className="small-text-product">xxx xxxx xxxx xxx xxx</p></div>  
        </div>

    </div>
   
  
  );
};

export default ProductPage;