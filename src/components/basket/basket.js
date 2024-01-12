import React, { useState } from 'react';
import BasketList from './basketList'; 
import '../checkout_page/checkoutPage.css';

const Basket = () => {
  const [items, setItems] = useState([
    { name: 'Product 1', price: 1, quantity: 1, id: 1 },
    { name: 'Product 2', price: 2, quantity: 1, id: 2 }
  ]);

  return (
    <div className='grid-container'>
      <div></div>
      <div className='grid-basket'>
        <div>
          <h3 className="text-checkout" style={{ paddingTop: 40 }}>Your Basket </h3>
          <div className='grid-basket-product'>
            
          <BasketList items={items} /> {/* Pass the items prop */}
          </div>
          <hr className="solid-small" />
        </div>

        <div className='center-items'>
          <button className="button-checkout">Continue Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;