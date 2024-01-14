// AppStateContext.js

import { createContext, useContext, useState } from 'react';
import productsArray from './products'; // Import your products array

const AppStateContext = createContext();

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const AppStateProvider = ({ children }) => {
  const [itemAddedToBasket, setItemAddedToBasket] = useState({});
  
  // Initialize quantities state based on productsArray
  const initialQuantities = {};
  productsArray.forEach((product) => {
    initialQuantities[product.ID] = 1;
  });

  const [quantities, setQuantities] = useState(initialQuantities);

  const handleAddToBasket = (productId) => {
    setItemAddedToBasket((prevItems) => ({
      ...prevItems,
      [productId]: !prevItems[productId],
    }));
  };

  const handleSetQuantities = (newQuantities) => {
    setQuantities(newQuantities);
  };

  const value = {
    itemAddedToBasket,
    quantities,
    onAddToBasket: handleAddToBasket,
    onSetQuantities: handleSetQuantities,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};
