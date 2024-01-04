import React, { createContext, useState } from 'react';

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const recordSale = (newSale) => {
    setSales([...sales, newSale]);
  };

  return (
    <SalesContext.Provider value={{ sales, recordSale }}>
      {children}
    </SalesContext.Provider>
  );
};