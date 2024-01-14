import { format } from "date-fns";

import './recordsPage.css';
import useFetch from "../../../customFunctions/useFetch";

const RecordsPage = () => {

    const { data: records, isLoading: isLoadingRecords, errorMsg: errorMsgRecords } = useFetch('http://localhost:8000/customerOrderRecords');
    const { data: drugs, isLoading: isLoadingDrugs, errorMsg: errorMsgDrugs } = useFetch('http://localhost:8000/products');

    
    // Function to generate list of purchased items in an order
    const getDrugList = (record) => {
        return drugs.filter(
            drug => record.quantities[drug.ID] > 0
            ).map(
                drug => `${drug.BRAND} ${drug.TYPE} ${drug.QTY} x${record.quantities[drug.ID]}`
            ).join(
                '\n'
            ); 
    }


    return ( 
        <div className="records-container">
            <h1 className="table-title">Customer Orders</h1>
            { (isLoadingRecords || isLoadingDrugs) && <div className="loading-msg-div">Loading...</div>}
            {errorMsgRecords && <div className="error-msg-div">{ errorMsgRecords }</div>}
            {errorMsgDrugs && <div className="error-msg-div">{ errorMsgDrugs }</div>}
            {records && drugs && <table className="records-table">
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Order Date</th>
                        <th>Order Type</th>
                        <th>Customer Contact</th>
                        <th>Item(s)</th>
                        <th>Item Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr className="record-log" key={record.id}>
                            <td>{ record.id }</td>
                            <td>{ format(record.date, 'dd-MMM-yyyy HH:mm') }</td>
                            { record.isDelivery && <td>Delivery</td> }
                            { !record.isDelivery && <td>Click and Collect</td> }
                            <td>
                                { record.firstName } { record.lastName }
                                <br />
                                { record.email }
                                <br />
                                { record.phoneNumber }
                            </td>
                            <td>
                                <pre className="items-list">{ getDrugList(record) }</pre> 
                            </td>
                            <td>{ record.totalCost.toFixed(2) }</td>
                            <td className={ record.status === "Completed" ? "completed-status-cell" : "paid-status-cell" }>
                                { record.status }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default RecordsPage;