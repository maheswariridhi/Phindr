// loadProducts.js

const loadProducts = () => {
  try {
    // Assuming 'db.json' is in the 'public/data' folder
    const response = require('../public/db.json');
    console.log(response);
    return response.products;
  } catch (error) {
    console.error('Error reading or parsing file:', error);
    return [];
  }
};

module.exports = loadProducts;
