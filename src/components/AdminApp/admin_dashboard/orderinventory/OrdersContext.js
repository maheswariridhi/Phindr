// OrdersContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context to manage orders and transactions

export const OrdersContext = createContext();

// Create a provider component to provide order and transaction data to components
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Load orders and transactions from localStorage when the component mounts
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Set the initial state with stored data
    setOrders(storedOrders);
    setTransactions(storedTransactions);
  }, []);

    // Save orders and transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [orders, transactions]);

    // Function to add a new order to the orders state
  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
  };

    // Function to remove an order at a given index from the orders state
  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

    // Function to add a new transaction to the transactions state
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

    // Function to update the status of a transaction with a given ID
  const updateTransactionStatus = (transactionId, newStatus) => {
    const updatedTransactions = transactions.map(transaction => 
      transaction.transactionId === transactionId 
        ? { ...transaction, status: newStatus }
        : transaction
    );
    setTransactions(updatedTransactions);
  };
  // Provide orders, functions to add/remove orders, transactions, and functions to manage transactions to child components
  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, transactions, addTransaction, updateTransactionStatus }}>
      {children}
    </OrdersContext.Provider>
  );
};
