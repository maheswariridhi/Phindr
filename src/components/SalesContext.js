// SalesContext.js
import React, { createContext, useState } from 'react';

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState(() => {
    // Retrieve the sales from local storage if present
    const savedSales = localStorage.getItem('sales');
    return savedSales ? JSON.parse(savedSales) : [];
  });

  const recordSale = (newSale) => {
    const updatedSales = [...sales, newSale];
    setSales(updatedSales);
    // Save the updated sales to local storage
    localStorage.setItem('sales', JSON.stringify(updatedSales));
  };

  return (
    <SalesContext.Provider value={{ sales, recordSale }}>
      {children}
    </SalesContext.Provider>
  );
};
