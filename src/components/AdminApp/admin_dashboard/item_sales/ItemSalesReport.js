import React from 'react';
import './ItemSalesReport.css'; // Make sure to create and import the CSS file
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure

const ItemSalesReport = () => {
  // Dummy data for the sales report
  const salesData = [
    { drugId: '01', category: 'Cold & Flu', drugName: 'Vicks, Vaporub 100g', quantitySold: 2, sales: '£20' },
    // ... more data
  ];

  return (
    <div className="sales-report">
      <header className="sales-report-header">
        <h1>Item Sales Report</h1>
        <img src={locationImage} alt="Location" className="location-icon"/>
      </header>
      <div className="sales-report-content">
        <div className="sales-report-controls">
          <label>
            <input type="checkbox" /> Category
          </label>
          <input type="search" placeholder="Search..." />
        </div>
        <table className="sales-report-table">
          <thead>
            <tr>
              <th>Drug ID</th>
              <th>Category</th>
              <th>Drug Name</th>
              <th>Quantity Sold</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index}>
                <td>{item.drugId}</td>
                <td>{item.category}</td>
                <td>{item.drugName}</td>
                <td>{item.quantitySold}</td>
                <td>{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemSalesReport;
