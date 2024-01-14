// OrdersContext.js
import React, { createContext, useState, useEffect } from 'react';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

    setOrders(storedOrders);
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [orders, transactions]);

  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
  };

  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const updateTransactionStatus = (transactionId, newStatus) => {
    const updatedTransactions = transactions.map(transaction => 
      transaction.transactionId === transactionId 
        ? { ...transaction, status: newStatus }
        : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, transactions, addTransaction, updateTransactionStatus }}>
      {children}
    </OrdersContext.Provider>
  );
};
