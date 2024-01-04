import React from "react";
import './AdminHomepage.css';
import locationImage from '../admin_dashboard/location.png';
import AdminNavbar from "../navbar/AdminNavbar";

const AdminHomepage = () => {
    return (
        <div >
            
            <img src={locationImage} alt="Location" className="location-icon"/>
            <div className="lowest_stock">
                <p>lowest stock</p>
            </div>

            <div className="grid-row">
                <div className="daily_stats">
                    <p>daily stats</p>
                </div>

                <div className="stacked-boxes">
                    <div className="smallest_boxes">
                        <p>total balance</p>
                    </div>

                    <div className="smallest_boxes">
                        <p>Transaction History</p>
                    </div>
                </div>
                
            </div>
        </div> 
    );
}

export default AdminHomepage;

