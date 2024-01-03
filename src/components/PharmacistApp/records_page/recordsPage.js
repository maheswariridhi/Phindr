import { format } from "date-fns";
import { useState } from "react";

import './recordsPage.css';

const RecordsPage = () => {
    const [records, setRecords] = useState([
        { id: 1, date: new Date(2024, 0, 1, 14, 20), type: "click collect", contact: "Mr John Smith", items: [1, 2, 3, 4], totalPrice: 22.5, status: "Paid"},
        { id: 2, date: new Date(2023, 10, 11, 23, 45), type: "click collect", contact: "Mr Tom Holland", items: [4, 5], totalPrice: 10.4, status: "Completed"},
        { id: 3, date: new Date(2024, 0, 2, 3, 4), type: "delivery", contact: "Ms Joe", items: [6, 7, 8], totalPrice: 17.0, status: "Unpaid"}
    ]);

    
    return ( 
        <div className="records-container">
            <h1 className="table-title">Customer Orders</h1>
            <table className="records-table">
                <tr>
                    <th>Order Number</th>
                    <th>Order Date</th>
                    <th>Order Type</th>
                    <th>Customer Contact</th>
                    <th>Item(s)</th>
                    <th>Item Total</th>
                    <th>Status</th>
                </tr>
                {records.map((record) => (
                    <tr className="record-log" key={record.id}>
                        <td>{ record.id }</td>
                        <td>{ format(record.date, 'dd-MMM-yyyy HH:mm') }</td>
                        <td>{ record.type }</td>
                        <td>{ record.contact }</td>
                        <td>{ record.items }</td>
                        <td>{ record.totalPrice }</td>
                        <td className="status-cell">{ record.status }</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
 
export default RecordsPage;