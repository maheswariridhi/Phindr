// SalesContext.js
import React, { createContext, useState } from 'react';

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const recordSale = (newSale) => {
    setSales((currentSales) => [...currentSales, { ...newSale, timestamp: new Date() }]);
  };

  return (
    <SalesContext.Provider value={{ sales, recordSale }}>
      {children}
    </SalesContext.Provider>
  );
};
