import React, { useState, useContext } from 'react'; // Added useContext here
import './OrderInventory.css'; 
import { useHistory, useLocation } from 'react-router-dom';
import backButtonImage from './back-button.png'; // Ensure this path is correct
import locationImage from '../../admin_dashboard/location.png'; // Ensure this path is correct
import { OrdersContext } from './OrdersContext'; // Since OrdersContext is in the same directory

// ... rest of your OrderInventory component


const OrderInventory = () => {
  const [quantity, setQuantity] = useState('');
  const history = useHistory();
  const location = useLocation();
  const product = location.state?.product;
  const { addOrder } = useContext(OrdersContext);
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };


  const handlePlaceOrder = () => {
    const newOrder = {
      name: `${product.BRAND}, ${product.TYPE}`,
      quantity: parseInt(quantity, 10),
      cost: parseFloat(product.PRICE) * parseInt(quantity, 10)
    }
    addOrder(newOrder); // Add the order to the context

  };


  const handleBack = () => {
    history.goBack();
  };

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="order-inventory">
      <header className="inventory-header">
        <img src={backButtonImage} alt="Back" className="back-button" onClick={handleBack}/>
        <img src={locationImage} alt="Location" className="location-icon"/>
        <h1 className="inventory-title">  Order Inventory</h1>
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
              <th>Drug Name</th>
              <td>{`${product.BRAND}, ${product.TYPE}`}</td>
            </tr>
            <tr>
              <th>Stock Levels</th>
              <td className={`stock-level ${product.STOCK <= product.FULLSTOCK ? 'low-stock' : ''}`}>
                {product.STOCK}/{product.FULLSTOCK}
              </td>
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
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderInventory;
