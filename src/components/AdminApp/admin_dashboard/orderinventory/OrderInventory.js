import React, { useState, useContext } from 'react';
import './OrderInventory.css'; 
import '../AdminDashboard.css'; 
import { useHistory, useLocation } from 'react-router-dom';
import backButtonImage from './back-button.png'; 
import locationImage from '../../admin_dashboard/location.png'; 
import { OrdersContext } from './OrdersContext'; 


const OrderInventory = () => {
  const [quantity, setQuantity] = useState('');
  const [orderAdded, setOrderAdded] = useState(false); // State variable for message visibility
  const history = useHistory();
  const location = useLocation();
  const product = location.state?.product;
  const { addOrder } = useContext(OrdersContext);

  const handleGoToPendingOrders = () => {
    history.push('/admin-confirm-orders');
  };
  
    // Function to determine stock level class
    const getStockLevelClass = (currentStock, fullStock) => {
      if (currentStock <= fullStock / 2) {
        return 'low-stock'; // Low stock
      } else if (currentStock === fullStock) {
        return 'full-stock'; // Full stock
      } else {
        return 'mid-stock'; // Mid stock
      }
    };
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePlaceOrder = () => {
    const newOrder = {
      name: `${product.BRAND}, ${product.TYPE}`,
      quantity: parseInt(quantity, 10),
      cost: parseFloat(product.PPRICE) * parseInt(quantity, 10),
    };
    addOrder(newOrder); // Add the order to the context
    setOrderAdded(true); // Update state to show message
  };

  const handleBack = () => {
    history.goBack();
  };

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="order-inventory">
      <header className="content-header">
        <img src={backButtonImage} alt="Back" className="back-button" onClick={handleBack} />
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title">Order Inventory</h1>
        {/* User info could be shown here */}
      </header>
      <div className="inventory-details">
        <table className="inventory-table">
          <tbody>
            <tr>
              <th>Drug ID</th>
              <td>{product.ID}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{product.CATEGORY}</td>
            </tr>
            <tr>
              <th>Drug Brand</th>
              <td>{`${product.BRAND}`}</td>
            </tr>
            <tr>
              <th>Drug Name</th>
              <td>{`${product.TYPE}`}</td>
            </tr>
            <tr>
            <th>Stock Levels</th>
            <td className={`stock-level ${getStockLevelClass(product.CURRENTSTOCK, product.FULLSTOCK)}`}>
        {product.CURRENTSTOCK}/{product.FULLSTOCK}
            </td>
          </tr>
          <tr> {/* Add this row */}
            <th>Cost (£)</th>
            <td>{product.PPRICE}</td>
          </tr>
          </tbody>
        </table>
        <div className="order-form">
          <label htmlFor="quantity">Quantity to Order:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handlePlaceOrder} className="place-order-button">
            Place Order
          </button>          
          {orderAdded && <p className="added-to-orders-text">Added to Pending Orders</p>}

          <button onClick={handleGoToPendingOrders} className="pending-order-button">
            Go to Pending Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderInventory;
