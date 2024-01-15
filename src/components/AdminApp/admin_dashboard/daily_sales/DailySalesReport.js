import React, { useEffect, useState } from 'react';
import useFetch from '../../../../customFunctions/useFetch';
import './DailySalesReport.css'; // CSS for styling
import '../AdminDashboard.css'; // CSS for styling
import locationImage from '../../admin_dashboard/location.png'; 

//Daily sales report including time period and sales
//Works with the local host database

const DailySalesReport = () => {
  const { data } = useFetch('http://localhost:8000/customerOrderRecords'); // Fetch data from database
  const [salesByHour, setSalesByHour] = useState({});  // State to store sales data grouped by hour
 
  // useEffect to update salesByHour when data changes
  useEffect(() => {
    if (data && data.length > 0) {
      const groupedSales = groupSalesByHour(data);
      setSalesByHour(groupedSales);
    }
  }, [data]);

    // Function to group sales data by hour
  const groupSalesByHour = (sales) => {
    const salesByHour = {};
    sales.forEach((sale) => {
      if(sale.date) {
        const hour = new Date(sale.date).getHours();
        if(!isNaN(hour)) {
          if (!salesByHour[hour]) {
            salesByHour[hour] = 0;
          }
          salesByHour[hour] += parseFloat(sale.totalCost);
        }
      }
    });
    return salesByHour;
  };

    // Function to format the hour period
  const formatHourPeriod = (hour) => {
    return `${hour.toString().padStart(2, '0')}:00-${(hour + 1).toString().padStart(2, '0')}:00`;
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
              <td>{formatHourPeriod(parseInt(hour, 10))}</td>
              <td>£{total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailySalesReport;
