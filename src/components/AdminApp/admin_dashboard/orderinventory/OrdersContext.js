// OrdersContext.js
import React, { createContext, useState, useEffect } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load orders and transactions from localStorage when the component mounts
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

    setOrders(storedOrders);
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    // Save orders and transactions to localStorage whenever they change
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [orders, transactions]);

  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);

    const newTransaction = {
      transactionId: Date.now(),
      date: new Date().toLocaleDateString(),
      items: [order],
      totalCost: order.cost,
      status: 'Pending',
    };

    setTransactions([...transactions, newTransaction]);
  };

  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, transactions, addTransaction }}>
      {children}
    </OrdersContext.Provider>
  );
};
