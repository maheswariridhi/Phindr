// DailySalesReport.js
import React, { useContext, useState, useEffect } from 'react';
import { SalesContext } from '../../../SalesContext';
import './DailySalesReport.css'; 
import locationImage from '../../admin_dashboard/location.png';
import useFetch from '../../../../customFunctions/useFetch';


const DailySalesReport = () => {
  const { sales } = useContext(SalesContext);
  const [salesByHour, setSalesByHour] = useState({}); // State for sales data grouped by hour

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch('http://localhost:8000/customerOrderRecords'); // Your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const salesData = await response.json();
        const groupedData = groupSalesByHour(salesData);
        setSalesByHour(groupedData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchSalesData();
  }, []); // Empty dependency array means this runs once on mount

  // Function to group sales by hour and calculate the total for each hour
  const groupSalesByHour = (salesData) => {
    const salesByHour = {};
    salesData.forEach((sale) => {
      // Assuming sale.timestamp is a string in ISO format
      const hour = new Date(sale.timestamp).getHours();
      if (!salesByHour[hour]) {
        salesByHour[hour] = 0;
      }
      salesByHour[hour] += sale.totalCost;
    });
    return salesByHour;
  };

  return (
    <div className="daily-sales-report">
      <header className="daily-sales-report-header">
        <h1 className="daily-sales-report-title">Daily Sales Report</h1>
        <img src={locationImage} alt="Location" className="location-icon" />
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
                    
            