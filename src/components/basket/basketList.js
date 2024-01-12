import React from 'react';

const BasketList = ({ items }) => { // Remove the name prop from the destructuring
  return (
    <div>
      {items.map((item) => (
        <div className='grid-basket-product' key={item.id}>
          <p className="text-checkout">{item.name}</p>
          <p className="text-checkout">£{item.price}</p>
          <p className='text-checkout'>Quantity: {item.quantity}</p>
          <p className='text-checkout'>Remove </p>
        </div>
      ))}
    </div>
  );
}

export default BasketList;