import React from "react";
import './AdminHomepage.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import locationImage from '../admin_dashboard/location.png';
import AdminNavbar from "../navbar/AdminNavbar";

const AdminHomepage = () => {
    return (
        <div >
            
            <h3 className="dashboard-title">Dashboard</h3>
            <img src={locationImage} alt="Location" className="location-icon-admin"/>
            <div className="lowest_stock">
                <p className="dashboard-title-box">Lowest stock</p>
            </div>

            <div className="grid-row">
                <div className="daily_stats">
                    <p className="dashboard-title-box">Daily stats</p>
                </div>

                <div className="stacked-boxes">
                    <div className="smallest_boxes">
                        <div className="transaction-history-container">
                            <p className="dashboard-title-box">Total Balance</p>
                            <p className="dashboard-title-box">£XXX,XXX</p>
                            <div className="in-out-container">
                                <p className="text1>">Income</p>
                                <p className="text2">Expenses</p>
                            </div>
                        </div>
                    </div>

                    <div className="smallest_boxes">
                        <div className="transaction-history-container">
                            <p className="dashboard-title-box">Transaction History</p>
                            <Link to = "../admin-transactions">
                                <p className="view-all"> View all </p>
                            </Link>    
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </div> 
    );
}

export default AdminHomepage;

