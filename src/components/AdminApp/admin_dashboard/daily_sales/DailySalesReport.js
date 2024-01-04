import React from 'react';
import './DailySalesReport.css'; // Make sure to create and import the CSS file
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure

const DailySalesReport = () => {
  // Dummy data for the daily sales report
  const salesData = new Array(24).fill(null).map((_, index) => ({
    time: `${index}:00-${index + 1}:00`,
    sales: Math.floor(Math.random() * 100) // Random sales amount for demonstration
  }));

  // Calculate the total sales
  const totalSales = salesData.reduce((sum, { sales }) => sum + sales, 0);

  return (
    <div className="daily-sales-report">
      <header className="daily-sales-report-header">
        <h1>Daily Sales Report</h1>
        <img src={locationImage} alt="Location" className="location-icon"/>
      </header>
      <div className="daily-sales-report-content">
        <table className="daily-sales-report-table">
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>£{item.sales.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="daily-sales-report-total">
          <strong>Total Sales:</strong> £{totalSales.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default DailySalesReport;
