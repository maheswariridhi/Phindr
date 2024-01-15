import React from "react";
import './AdminNavbar.css';
import phindrLogo from './phindrlogo.png';
import adminIcon from './Adminicon.png';
import { Link } from "react-router-dom"; // Import Link from react-router-dom


// Navbar for the admin dashboard
// Links to all the admin pages
const AdminNavbar = () => {
  return (
    <div className="vertical-navbar">
      <img src={phindrLogo} alt="phindr" className='logo_image'/>
      <Link to="/admin-home" className="navbar-text">Dashboard</Link>
      <Link to="/admin-inventory" className="navbar-text">Inventory</Link>
      <Link to="/admin-confirm-orders" className="navbar-text">Pending Orders</Link>
      <Link to="/admin-transactions" className="navbar-text">Transaction History</Link>
      <Link to="/admin-daily-sales" className="navbar-text">Sales Report</Link>
      
      <Link to="/login">
        <img src={adminIcon} alt="admin" className='admin_icon'/>
        <label className='logout'>Logout</label>
      </Link>
    </div>
  );
};

export default AdminNavbar;
