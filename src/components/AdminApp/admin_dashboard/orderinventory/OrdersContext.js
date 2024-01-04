import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1); // Remove the order at the specified index
    setOrders(updatedOrders);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
