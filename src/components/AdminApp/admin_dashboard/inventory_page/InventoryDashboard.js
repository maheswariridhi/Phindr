import React from 'react';
import './InventoryDashboard.css'; // Ensure this CSS file is created and linked
import locationImage from '../../admin_dashboard/location.png'; // Adjust the path as per your file structure
import products from './products';

const InventoryDashboard = () => {
  return (
    <div className="inventory-dashboard">
      <header className="content-header">
        <h1 className="inventory-title">Inventory</h1>
        <img src={locationImage} alt="Location" className="location-icon"/>
      </header>
      <div className="search-and-sort">
        <div className="sort-by-label">
          <span>Sort by </span>
        </div>
        <div className="sort-options">
          <label><input type="checkbox" /> Category</label>
          <label><input type="checkbox" /> Stock Levels</label>
        </div>
        <input type="search" placeholder="Search..." />
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Drug ID</th>
            <th>Category</th>
            <th>Drug Name</th>
            <th>Stock Levels</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ID}>
              <td>{product.ID}</td>
              <td>{product.CATEGORY}</td>
              <td>{`${product.BRAND}, ${product.TYPE} ${product.QTY}`}</td>
              <td><span className={`stock-level ${product.STOCK <= product.LIMIT ? 'low-stock' : ''}`}>{`${product.STOCK}/${product.LIMIT}`}</span></td>
              <td>{product.STOCK > 0 ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="instruction-text">Click on Drug to order</p>
    </div>
  );
};

export default InventoryDashboard;
