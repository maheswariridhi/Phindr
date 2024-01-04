import React, { useContext } from 'react'; // Ensure useContext is imported like this
import './DailySalesReport.css';
import locationImage from '../../admin_dashboard/location.png';
import { SalesContext } from '../../../SalesContext'; // Adjust this path as necessary

const DailySalesReport = () => {
    const { sales } = useContext(SalesContext);
    const { salesData } = useContext(SalesContext); // Correctly placed inside the component

    const today = new Date().setHours(0, 0, 0, 0);
  
    const todaysSales = sales.filter((sale) =>
      new Date(sale.date).setHours(0, 0, 0, 0) === today
    );
  
    const totalSales = todaysSales.reduce((sum, sale) => sum + sale.totalCost, 0);
  
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
