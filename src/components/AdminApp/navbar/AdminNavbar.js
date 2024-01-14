import React from "react";
import './AdminNavbar.css';
import phindrLogo from './phindrlogo.png';
import adminIcon from './Adminicon.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        <a href="../admin-home" className="navbar-text">Dashboard</a>
        <a href="../admin-inventory" className="navbar-text">Inventory</a>
        <a href="../admin-confirm-orders" className="navbar-text">Pending Orders</a>
        <a href="../admin-transactions" className="navbar-text">Transaction History</a>
        <a href="../admin-daily-sales" className="navbar-text">Sales Report</a>        
     
        <Link to = "../login">
          <img src={adminIcon} alt="admin" className='admin_icon'/>
          <label className='logout'>Logout</label>
        </Link>
 
        
      </div>
    );
  };
  
  export default AdminNavbar;