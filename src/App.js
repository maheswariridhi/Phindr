// Import React and hooks
import React, { useEffect, useState } from 'react';
// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/CustomerApp/authContext';

// Import components for various pages in the application
import Navbar from './components/CustomerApp/navbar/Navbar';
import StorePage from './components/CustomerApp/store_page/storePage';
import LoginPage from './components/CustomerApp/login_page/login';
import ProductPage from './components/CustomerApp/product_page/productPage';
import CheckoutPage from './components/CustomerApp/checkout_page/checkoutPage';
import BasketPage from './components/CustomerApp/store_page/basket_components/basket'
import ConfirmationPage from './components/CustomerApp/checkout_page/confirmationPage';
import PharmacistStorePage from './components/CustomerApp/store_page/pStorePage';
import PharmacistNavbar from './components/CustomerApp/pharmacist-navbar/pNavbar';
import PharmacistProductPage from './components/CustomerApp/product_page/pproductPage';

import MapPage from './components/CustomerApp/store_page/basket_components/map';
import StoreCheckoutPage from './components/CustomerApp/checkout_page/storeCheckout';
import RecordsPage from './components/PharmacistApp/records_page/recordsPage';
import AdminNavbar from './components/AdminApp/navbar/AdminNavbar';
import AdminDashboard from './components/AdminApp/admin_dashboard/transaction_page/admintransactions';
import InventoryDashboard from './components/AdminApp/admin_dashboard/inventory_page/InventoryDashboard';
import { OrdersProvider } from './components/AdminApp/admin_dashboard/orderinventory/OrdersContext'; 
import ConfirmOrders from './components/AdminApp/admin_dashboard/ConfirmOrders/ConfirmOrders';
import AdminTransactions from './components/AdminApp/admin_dashboard/transaction_page/admintransactions';
//import OrderInventory from './components/AdminApp/admin_dashboard/orderinventory/OrderInventory';
import ItemSales from './components/AdminApp/admin_dashboard/item_sales/ItemSalesReport';
import DailySalesReport from './components/AdminApp/admin_dashboard/daily_sales/DailySalesReport';
import AdminHomepage from './components/AdminApp/home_page/AdminHomepage';


import { Helmet } from 'react-helmet';
// Import the logo for the favicon
import PhindrLogo from './phindr.png';

// Import global styles
import './App.css';
import OrderInventory from './components/AdminApp/admin_dashboard/orderinventory/OrderInventory';
import { SalesProvider } from './components/SalesContext';


function App() {
  // Hook to set the page title and favicon on component mount
  useEffect(() => {
    document.title = 'Phindr | Medical Care for Everyone';
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = PhindrLogo; // Set favicon
    document.head.appendChild(link);
  }, []); // Empty dependency array means this runs once on mount

  // State hook for search value
  const [searchValue, setSearchValue] = useState('');

  // Handler for search input changes
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  // Return the JSX for the app
  return (

    <SalesProvider>
    <OrdersProvider>
    <AuthProvider> 
      <div className="App">
        <Helmet>
          {/* Add additional meta tags or other header elements here */}
        </Helmet>

        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                {/* LoginPage will only be rendered when the path is /login */}
                <LoginPage />
              </Route>

              {/* Navbar is common for all routes */}
              <Route path="/home">
                <Navbar onSearchChange={handleSearchChange} />

                <StorePage searchValue={searchValue} />
                
              </Route>

              <Route path="/pharmacist-home">
                <PharmacistNavbar />
                <PharmacistStorePage />
              </Route>

              <Route path="/pproduct/:ProductId" component={PharmacistProductPage}>
                <PharmacistNavbar />
                <PharmacistProductPage />
              </Route>

              <Route exact path="/pharmacist-map">
                <PharmacistNavbar />
                <MapPage />
              </Route>

              <Route path="/product/:ProductId" component={ProductPage}>
                <Navbar />
                <ProductPage />
              </Route>

              <Route exact path="/checkout">
                <Navbar />
                <CheckoutPage />
              </Route>

              <Route exact path="/store-checkout">
                <Navbar />
                <StoreCheckoutPage />
              </Route>

              <Route exact path="/basket">
                <Navbar />
                <BasketPage />
              </Route>

              <Route exact path="/map">
                <Navbar />
                <MapPage />
              </Route>

              <Route exact path="/confirmation">
                <Navbar />
                <ConfirmationPage />
              </Route>

              <Route exact path="/records">
                <RecordsPage />
              </Route>
              
              <Route exact path="/admin-home">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <AdminHomepage/>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-transactions">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <AdminDashboard/>  
              </div>
            </div>
          </Route>

          <Route exact path="/admin-inventory" >
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <InventoryDashboard/>  
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-order-inventory">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <OrderInventory/>  
                </div>
              </div>
            </div>
            
          </Route>

          <Route exact path="/admin-confirm-orders">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <ConfirmOrders/>  
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-daily-sales">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <DailySalesReport/>  
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-item-sales">
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <ItemSales/>  
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-inventory" >
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <DailySalesReport/>  
                </div>
              </div>
            </div>
          </Route>

          <Route exact path="/admin-inventory" >
            <div className='AdminLayout'>
              <div className="AdminNavbar">
                <AdminNavbar />  
              </div>
              <div className="AdminPages">
                <div className='scrollable'>
                  <ItemSales/>  
                </div>
              </div>
            </div>
          </Route>
          
          <Route path="/login" component={LoginPage} />

                {/* Default route */}
                <Route exact path="/">
                  <Redirect to="/login" /> {/* Change this if your login path is different */}
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthProvider>
    </OrdersProvider> 
    </SalesProvider>
  );
}

// Export the App component for use in index.js
export default App;
