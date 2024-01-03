import React from "react";
import './AdminNavbar.css';
import phindrLogo from './phindrlogo.png';
import adminIcon from './Adminicon.png';

const AdminNavbar = () => {
    return (
      <div className="vertical-navbar">
        <img src={phindrLogo} alt="phindr" className='logo_image'/>
        <a href="#">Dashboard</a>
        <a href="#">Inventory</a>
        <a href="#">Pending Orders</a>
        <a href="#">Transaction History</a>
        <a href="#">Sales Report</a>
        
        <img src={adminIcon} alt="admin" className='admin_icon'/>
        <label className='logout'>Logout</label>
      </div>
    );
  };
  
  export default AdminNavbar;