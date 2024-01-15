import React, { useState, useEffect } from 'react';
import './InventoryDashboard.css';
import locationImage from '../../admin_dashboard/location.png';
import products from './products'; 
import useFetch from '../../../../customFunctions/useFetch';
import { useHistory } from 'react-router-dom';

const InventoryDashboard = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortByLowStock, setSortByLowStock] = useState(false); // State variable for sorting

  // Fetch customer orders
  const { data: customerOrders } = useFetch('http://localhost:8000/customerOrderRecords');

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

  useEffect(() => {
    // Initialize each product's current stock to its full stock
    let updatedProducts = products.map(product => {
      return { ...product, CURRENTSTOCK: product.FULLSTOCK };
    });

    if (customerOrders) {
      // Create a map to store total quantities sold for each product
      const totalSoldMap = {};

      // Aggregate quantities sold for each product
      customerOrders.forEach(order => {
        Object.entries(order.quantities).forEach(([productId, quantitySold]) => {
          totalSoldMap[productId] = (totalSoldMap[productId] || 0) + quantitySold;
        });
      });

      // Update the current stock in the products list
      updatedProducts = updatedProducts.map(product => {
        const soldQuantity = totalSoldMap[product.ID.toString()] || 0;
        return { ...product, CURRENTSTOCK: Math.max(product.CURRENTSTOCK - soldQuantity, 0) };
      });
    }

    // Sort by low stock levels relative to each other
    if (sortByLowStock) {
      updatedProducts.sort((a, b) => (a.CURRENTSTOCK / a.FULLSTOCK) - (b.CURRENTSTOCK / b.FULLSTOCK));
    }

    setFilteredProducts(updatedProducts);
  }, [customerOrders, sortByLowStock]);

  const handleRowClick = (product) => {
    history.push('/admin-order-inventory', { product });
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const updatedProducts = products.filter(product =>
      product.TYPE.toLowerCase().includes(searchTerm) ||
      product.BRAND.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(updatedProducts);
  };

  const handleLowStockFilterChange = (event) => {
    setSortByLowStock(event.target.checked);
  };

  return (
    <div className="inventory-dashboard">
      <header className="content-header">
        <img src={locationImage} alt="Location" className="location-icon-admin-dashboard" />
        <h1 className="admin-dashboard-title">Inventory</h1>
      </header>
      <div className="search-and-sort">
        <div className="sort-options">
          <label>
            <input
              type="checkbox"
              checked={sortByLowStock}
              onChange={handleLowStockFilterChange}
            />{' '}
            Low Stock Levels
          </label>
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
              <td className={`stock-level ${getStockLevelClass(product.CURRENTSTOCK, product.FULLSTOCK)}`}>
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
