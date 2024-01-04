import React from "react";
import './AdminNavbar.css';
import phindrLogo from './phindrlogo.png';
import adminIcon from './Adminicon.png';
import AdminTransactions from "../admin_dashboard/transaction_page/admintransactions";
import InventoryDashboard from "../admin_dashboard/inventory_page/InventoryDashboard";
import AdminHomepage from "../home_page/AdminHomepage";
import OrderInventory from "../admin_dashboard/orderinventory/OrderInventory";
import ConfirmOrders from "../admin_dashboard/ConfirmOrders/ConfirmOrders";
import DailySalesReport from "../admin_dashboard/daily_sales/DailySalesReport";

const AdminNavbar = () => {
    return (
      <div className="vertical-navbar">
        <img src={phindrLogo} alt="phindr" className='logo_image'/>
        <a href="../admin-home">Dashboard</a>
        <a href="../admin-inventory">Inventory</a>
        <a href="../admin-confirm-orders">Pending Orders</a>
        <a href="../admin-transactions">Transaction History</a>
        <a href="../admin-daily-sales">Sales Report</a>
        
        <img src={adminIcon} alt="admin" className='admin_icon'/>
        <label className='logout'>Logout</label>
      </div>
    );
  };
  
  export default AdminNavbar;