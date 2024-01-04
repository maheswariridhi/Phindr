import { format } from "date-fns";

import './recordsPage.css';
import useFetch from "../../../customFunctions/useFetch";

const RecordsPage = () => {

    const { data: records, isLoading, errorMsg } = useFetch('http://localhost:8000/customerOrderRecords');

    
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