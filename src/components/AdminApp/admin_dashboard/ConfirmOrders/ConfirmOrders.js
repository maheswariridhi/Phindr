import React, { useContext } from 'react';
import './ConfirmOrders.css';
import { OrdersContext } from '../orderinventory/OrdersContext'; // Adjusted for directory structure

const ConfirmOrders = () => {
  const { orders } = useContext(OrdersContext); // Use the context to get the current orders

  // Calculate the total cost of all orders
  const totalCost = orders.reduce((sum, order) => sum + (order.quantity * order.cost), 0);

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
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>${order.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="confirm-orders-total">
        <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
      </div>
      <button className="confirm-orders-confirm-btn">Confirm</button>
    </div>
  );
};

export default ConfirmOrders;
