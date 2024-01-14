import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './ConfirmOrders.css';
import { OrdersContext } from '../orderinventory/OrdersContext';
import locationImage from '../../admin_dashboard/location.png';

const ConfirmOrders = () => {
  const { orders, removeOrder, addTransaction } = useContext(OrdersContext);
  const [totalCost, setTotalCost] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const newTotalCost = orders.reduce((sum, order) => sum + order.cost, 0);
    setTotalCost(newTotalCost);
  }, [orders]);

  const handleConfirm = () => {
    if (orders.length === 0) {
      alert('No orders to confirm.');
      return;
    }

    const transaction = {
      date: new Date().toLocaleDateString(),
      transactionId: `trans-${Date.now()}`,
      items: [],
      totalCost: totalCost,
      status: 'Confirmed',
    };

    orders.forEach((order, index) => {
      transaction.items.push({
        name: order.name,
        quantity: order.quantity,
        cost: order.cost,
      });
      removeOrder(index);
    });

    addTransaction(transaction);
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
      <header className="content-header">
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title">Orders to be Confirmed</h1>
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
