import React, { useContext } from 'react';
import './admintransactions.css';
import locationImage from '../../admin_dashboard/location.png';
import { OrdersContext } from '../orderinventory/OrdersContext';


const AdminTransactions = () => {
  const { transactions } = useContext(OrdersContext);

  return (
    <div className="content">
      <header className="content-header">
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title">Transaction History</h1>
      </header>

      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Items</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.transactionId}</td>
                <td>
                  {transaction.items.map((item, itemIndex) => (
                    <p key={itemIndex}>
                      {item.name} x {item.quantity} (£{item.cost.toFixed(2)})
                    </p>
                  ))}
                </td>
                <td>
                  {transaction.items.map((item, itemIndex) => (
                    <p key={itemIndex}>
                      £{(item.quantity * item.cost).toFixed(2)}
                    </p>
                  ))}
                </td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTransactions;
