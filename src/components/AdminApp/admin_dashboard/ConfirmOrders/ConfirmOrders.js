import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './ConfirmOrders.css';
import { OrdersContext } from '../orderinventory/OrdersContext';

const ConfirmOrders = () => {
  const { orders, removeOrder, addTransaction } = useContext(OrdersContext); // Add addTransaction
  const [totalCost, setTotalCost] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation
  const history = useHistory(); // Initialize history

  const handleConfirm = () => {
    const transaction = {
      date: new Date().toLocaleDateString(),
      transactionId: Math.floor(Math.random() * 100000), // Generate a unique ID
      items: orders,
      totalCost: totalCost,
      status: 'Pending', // Set the status to 'pending'
    };
    addTransaction(transaction); // Add the transaction to the context

    orders.forEach((_, index) => {
      removeOrder(index);
    });
    setIsConfirmed(true);
  };

  useEffect(() => {
    const newTotalCost = orders.reduce((sum, order) => sum + order.cost, 0);
    setTotalCost(newTotalCost);
  }, [orders]);

  const handleDeleteOrder = (index) => {
    removeOrder(index);
  };

  const handleGoToTransactions = () => {
    history.push('/admin-transactions'); // Navigate to the Transactions page
  };

  return (
    <div className="confirm-orders">
      <header className="confirm-orders-header">
        <h1>Orders to be Confirmed</h1>
      </header>
      <table className="confirm-orders-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>${order.cost.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="confirm-orders-total">
        <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
      </div>
      {!isConfirmed ? (
        <button onClick={handleConfirm} className="confirm-orders-confirm-btn">
          Confirm
        </button>
      ) : (
        <p className="confirmation-message">Confirmed!</p>
      )}
      <button onClick={handleGoToTransactions} className="go-to-transactions-button">
        Go to Transactions
      </button>
    </div>
  );
};

export default ConfirmOrders;