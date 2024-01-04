// DailySalesReport.js
import React, { useContext } from 'react';
import { SalesContext } from '../../../SalesContext';
import './DailySalesReport.css'; // CSS for styling
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure

const DailySalesReport = () => {
  const { sales } = useContext(SalesContext);
  
  // Function to group sales by hour and calculate the total for each hour
  const groupSalesByHour = (sales) => {
    const salesByHour = {};
    sales.forEach((sale) => {
      const hour = sale.timestamp.getHours();
      if (!salesByHour[hour]) {
        salesByHour[hour] = 0;
      }
      salesByHour[hour] += sale.totalCost;
    });
    return salesByHour;
  };

  const salesByHour = groupSalesByHour(sales);

  return (
    <div className="daily-sales-report">
      <header className="daily-sales-report-header">
        <h1 className="daily-sales-report-title">Daily Sales Report</h1>
        <img src={locationImage} alt="Location" className="location-icon" />
      </header>
      {/* Generate the table rows for each hour */}
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salesByHour).map(([hour, total], index) => (
            <tr key={index}>
              <td>{`${hour}:00-${parseInt(hour) + 1}:00`}</td>
              <td>£{total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* You can add a row for total sales of the day if needed */}
    </div>
  );
};

export default DailySalesReport;
