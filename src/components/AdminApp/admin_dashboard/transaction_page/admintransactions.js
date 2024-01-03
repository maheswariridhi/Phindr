import React from 'react';
import './admintransactions.css'; // Ensure this CSS file is created and linked
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure

const AdminDashboard = () => {
  return (
      <div className="content">
        <header className="content-header">
            <div className="header-title-container">
                <h1 className="transaction-history-title">Transaction History</h1>
                <img src={locationImage} alt="Location" className="location-icon"/>
            </div>
            </header>

        <div className="table-container">
          <table className="transaction-table">
            {/* Table headers */}
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Items</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
            {/* Table rows and data */}
            {/* Add your data here */}
            <tr>
              <td>01/01/2024</td>
              <td>123456</td>
              <td>Item Name</td>
              <td>$100.00</td>
              <td>Completed</td>
            </tr>
            {/* Add more rows as needed */}
          </table>
          <button className="see-more">See more</button>
        </div>
      </div>
  );
};

export default AdminDashboard;
