//import React, { useEffect, useState } from 'react';
import './products.css';
import '../navbar/Navbar.css';
import location from '../navbar/location.png';

const ProductPage = () => {


  return (
    <div>
      <div className="grid-top">
        {/* Brand Info on the Left */}
        <div>
          <div>
            <img src="../store_pageitem1.png" className="image-top image mx-auto d-block" alt="Product 1" />
          </div>
        </div>

        <div>
          <h1 className="products-title">Product Name</h1>
          <h1 className="title">price</h1>
          <p className="text">avaliable:</p>
         
          <div className="center">
            <button className="buttons">Add to Basket</button>
          </div>

          <div className="center">
            <img src={location} className="location" alt="location" />
            <p className="text">Find in store  </p>
          </div>
          
        </div>
      </div>

      <hr className="solid" />


      <div class="grid-container">
        <div class="grid-item">
          <p className="text">Product details:</p>
          <p className="small-text">xxx</p>
        </div>

        <div class="grid-item">
          <p className="text">Ingredients:</p>
          <p className="small-text">xxx</p>
        </div>

        <div class="grid-item">
          <p className="text">Contraindications:</p>
          <p className="small-text">xxx xxxx xxxx xxx xxx</p></div>  
        </div>

    </div>
   
  
  );
};

export default ProductPage;