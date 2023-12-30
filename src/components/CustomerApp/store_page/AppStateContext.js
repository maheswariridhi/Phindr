import { createContext, useContext, useState } from 'react';

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

  const handleAddToBasket = (productId) => {
    setItemAddedToBasket((prevItems) => ({
      ...prevItems,
      [productId]: !prevItems[productId],
    }));
  };

  const value = {
    itemAddedToBasket,
    onAddToBasket: handleAddToBasket,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};
