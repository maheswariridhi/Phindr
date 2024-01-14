import React, { useState } from 'react';
import './InventoryDashboard.css'; 
import locationImage from '../../admin_dashboard/location.png'; 
import products from './products'; // Assuming this contains your product data
import { useHistory } from 'react-router-dom';
import '../AdminDashboard.css'

const InventoryDashboard = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products); // Initialize with all products

  const handleRowClick = (product) => {
    history.push('/admin-order-inventory', { product });
  };  

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter products based on the search term (type or brand)
    const filteredProducts = products.filter(product => 
      product.TYPE.toLowerCase().includes(searchTerm) ||
      product.BRAND.toLowerCase().includes(searchTerm)
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="inventory-dashboard">
      <header className="content-header">
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title" >Inventory</h1>
      </header>
      <div className="search-and-sort">
        <div className="sort-options">
          <label><input type="checkbox" /> Low Stock Levels</label>
        </div>
        <input 
          type="search" 
          placeholder="Search..."
          onChange={handleSearchChange} 
          value={searchTerm} // Bind the input value to the searchTerm state
        />
      </div>
      <table className="inventory-table" aria-label="Inventory Table">
        <thead>
          <tr>
            <th>Drug ID</th>
            <th>Category</th>
            <th>Drug Brand</th>
            <th>Drug Name</th>
            <th>Stock Levels</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.ID} onClick={() => handleRowClick(product)}>
              <td className='text-content'>{product.ID}</td>
              <td className='text-content'>{product.CATEGORY}</td>
              <td className='text-content'>{product.BRAND}</td>
              <td className='text-content'>{product.TYPE}</td>
              <td className={`stock-level ${product.CURRENTSTOCK <= product.FULLSTOCK ? 'low-stock' : ''}`}>
                {product.CURRENTSTOCK}/{product.FULLSTOCK}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
