import React, { createContext, useState } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]); // Add transactions state

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  }; // Add a function to add transactions

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, transactions, addTransaction }}>
      {children}
    </OrdersContext.Provider>
  );
};
