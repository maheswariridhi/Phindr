import React from "react";
import './AdminHomepage.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import locationImage from '../admin_dashboard/location.png';
import AdminNavbar from "../navbar/AdminNavbar";

import LowStock from './LowStock';
import TrendingStock from "./TrendStock";
import CostChart from "./CostChart";

//Displays all the key daily data for the admin
//Currently just a placeholder

const AdminHomepage = () => {
    return (
        <div >
            <div className="location-container">
                <img src={locationImage} alt="Location" className="location-icon-admin" />
            </div>
            <h3 className="dashboard-title">Dashboard</h3>
            <div className="lowest_stock">
                <p className="dashboard-title-box">Lowest stock</p> 
                <div className="low-container">
                    <LowStock className="low-stock"/>
                </div>
            </div>

            <div className="grid-row">
                <div className="daily_stats">
                    <p className="dashboard-title-box">Daily Analytics</p>
                    <div className="low-container">
                    <   TrendingStock />
                    <   CostChart />
                    </div>

                    <p className="dashboard-title-box">Gross Analytics</p>
                    <div className="low-container">
                    <   TrendingStock />
                    <   CostChart />
                    </div>
                </div>

                <div className="stacked-boxes">
                    <div className="smallest_boxes">
                        <div className="transaction-history-container">
                            <p className="dashboard-title-box">Total Balance</p>
                            <p className="dashboard-title-box">£XXX,XXX</p>
                            <p className="text1">Income: £YY,YY</p>
                            <p className="text1">Expenses: £Z,ZZ</p>
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

