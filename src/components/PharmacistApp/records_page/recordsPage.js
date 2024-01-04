import { format } from "date-fns";
import { useEffect, useState } from "react";

import './recordsPage.css';
import { isPending } from "q";

const RecordsPage = () => {
    const [records, setRecords] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/customerOrderRecords')
            .then(res => {
                if(!res.ok) {
                    throw Error('Cannot fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setRecords(data);
                setIsLoading(false);
                setErrorMsg(null);
            })
            .catch(err => {
                setErrorMsg(err.message);
                setIsLoading(false);
            })
    }, []);

    
    return ( 
        <div className="records-container">
            <h1 className="table-title">Customer Orders</h1>
            {isLoading && <div className="loading-msg-div">Loading...</div>}
            {errorMsg && <div className="error-msg-div">{ errorMsg }</div>}
            {records && <table className="records-table">
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
            </table>}
        </div>
    );
}

export default RecordsPage;