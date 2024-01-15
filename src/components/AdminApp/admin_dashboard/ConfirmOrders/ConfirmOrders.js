import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OrdersContext } from '../orderinventory/OrdersContext';
import './ConfirmOrders.css';

//Page for admin to confirm orders
//Functional page on the local host database

const ConfirmOrders = () => {
  const { orders, removeOrder, addTransaction } = useContext(OrdersContext);
  const [totalCost, setTotalCost] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Calculate the total cost of orders
    const newTotalCost = orders.reduce((sum, order) => sum + order.cost, 0);
    setTotalCost(newTotalCost);
  }, [orders]);

  const handleConfirm = () => {
    // Create a new transaction
    const transaction = {
      date: new Date().toLocaleDateString(),
      transactionId: Math.floor(Math.random() * 100000),
      items: orders,
      totalCost,
      status: 'Pending',
    };

    addTransaction(transaction);

    // Remove all orders
    orders.forEach((_, index) => removeOrder(index));
    setIsConfirmed(true);
  };

  const handleDeleteOrder = (index) => {
    removeOrder(index);
  };

  const handleGoToTransactions = () => {
    history.push('/admin-transactions');
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
              <td>£{order.cost.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="confirm-orders-total">
        <strong>Total Cost:</strong> £{totalCost.toFixed(2)}
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
