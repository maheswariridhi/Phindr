import React, { useContext, useEffect, useState } from 'react';
import './ConfirmOrders.css';
import { OrdersContext } from '../orderinventory/OrdersContext';

const ConfirmOrders = () => {
  const { orders, removeOrder } = useContext(OrdersContext); // Get the orders and removeOrder function from the context
  const [totalCost, setTotalCost] = useState(0); // State to store the total cost

  // Calculate the total cost whenever orders change
  useEffect(() => {
    const newTotalCost = orders.reduce((sum, order) => sum + order.cost, 0);
    setTotalCost(newTotalCost);
  }, [orders]);

  const handleDeleteOrder = (index) => {
    // Call the removeOrder function from the context to remove the order at the specified index
    removeOrder(index);
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
            <th>Action</th> {/* Add a new column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>${order.cost.toFixed(2)}</td>
              <td>
                {/* Add a delete button with an onClick handler */}
                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
              </td>
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
