import React, { useEffect, useState } from 'react';
import useFetch from '../../../../customFunctions/useFetch';
import './DailySalesReport.css'; // CSS for styling
import '../AdminDashboard.css'; // CSS for styling
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure

const DailySalesReport = () => {
  const { data } = useFetch('http://localhost:8000/customerOrderRecords'); // Fetch data from database
  const [salesByHour, setSalesByHour] = useState({});

  useEffect(() => {
    if (data && data.length > 0) {
      const groupedSales = groupSalesByHour(data);
      setSalesByHour(groupedSales);
    }
  }, [data]);

  // Function to group sales by hour and calculate the total for each hour
  const groupSalesByHour = (sales) => {
    const salesByHour = {};
    sales.forEach((sale) => {
      const hour = new Date(sale.timestamp).getHours();
      if (!salesByHour[hour]) {
        salesByHour[hour] = 0;
      }
      salesByHour[hour] += parseFloat(sale.totalCost);
    });
    return salesByHour;
  };

  return (
    <div className="daily-sales-report">
      <header className="content-header">
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title">Daily Sales Report</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Sales (£)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salesByHour).map(([hour, total], index) => (
            <tr key={index}>
              <td>{`${hour}:00-${parseInt(hour, 10) + 1}:00`}</td>
              <td>£{total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailySalesReport;
