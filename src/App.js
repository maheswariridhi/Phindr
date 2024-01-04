import React, { useEffect , useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/CustomerApp/navbar/Navbar';
import StorePage from './components/CustomerApp/store_page/storePage';
import LoginPage from './components/CustomerApp/login_page/login'
import ProductPage from './components/CustomerApp/product_page/productPage';
import CheckoutPage from './components/CustomerApp/checkout_page/checkoutPage';
import BasketPage from './components/CustomerApp/store_page/basket_components/basket'
import ConfirmationPage from './components/CustomerApp/checkout_page/confirmationPage'; 
import { SalesProvider } from './components/SalesContext';

import PharmacistStorePage from './components/CustomerApp/store_page/pStorePage';
import PharmacistNavbar from './components/CustomerApp/pharmacist-navbar/pNavbar';
import PharmacistProductPage from './components/CustomerApp/product_page/pproductPage';

import MapPage from './components/CustomerApp/store_page/basket_components/map'
import StoreCheckoutPage from './components/CustomerApp/checkout_page/storeCheckout';
import RecordsPage from './components/PharmacistApp/records_page/recordsPage';
import AdminNavbar from './components/AdminApp/navbar/AdminNavbar';
import AdminDashboard from './components/AdminApp/admin_dashboard/transaction_page/admintransactions';
import InventoryDashboard from './components/AdminApp/admin_dashboard/inventory_page/InventoryDashboard';
import { OrdersProvider } from './components/AdminApp/admin_dashboard/orderinventory/OrdersContext'; 
import ConfirmOrders from './components/AdminApp/admin_dashboard/ConfirmOrders/ConfirmOrders';
import OrderInventory from './components/AdminApp/admin_dashboard/orderinventory/OrderInventory';
import ItemSales from './components/AdminApp/admin_dashboard/item_sales/ItemSalesReport';
import DailySalesReport from './components/AdminApp/admin_dashboard/daily_sales/DailySalesReport';


import { Helmet } from 'react-helmet';
import PhindrLogo from './phindr.png';

import './App.css';

function App() {
  useEffect(() => {
    // Change website title
    document.title = 'Phindr | Medical Care for Everyone';

    // Change favicon dynamically
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    // Use the actual path or URL of the image for the favicon
    link.href = PhindrLogo;

    document.head.appendChild(link);

    return () => {
      // If needed, perform cleanup when the component is unmounted
      // For example, revert changes made in the 'useEffect'
    };
  }, []); 

  const [searchValue, setSearchValue] = useState('');

  // Function to handle changes in the search input
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <SalesProvider>
    <OrdersProvider>

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

          <Route path="/product/:ProductId" component={ProductPage}>
            <Navbar />
            <ProductPage />
          </Route>

          <Route exact path="/checkout">
            <Navbar />
            <CheckoutPage />
          </Route>

          <Route path="/confirmation">
          <Navbar />
            <ConfirmationPage />
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

          <Route exact path="/records">
            <RecordsPage />
          </Route>
          
          <Route exact path="/AdminHome">
            <div className='AdminPages'>
              <div>
                <AdminNavbar />  
              </div>

            </div>
            
          </Route>

          <Route exact path="/AdminTransaction">
            
            <div className='AdminPages'>
              <div>
                <AdminNavbar />  
              </div>
              <div>
                <AdminDashboard/>  
              </div>
            </div>
            
          </Route>

            
            {/* Admin Dashboard Routes */}
            <Route path="/admin/inventory" component={InventoryDashboard} />
            <Route path="/admin/order-inventory" component={OrderInventory} />
            <Route path="/admin/transactions" component={AdminDashboard} />
            <Route path="/admin/confirm-orders" component={ConfirmOrders} />
            <Route path="/admin/item-sales" component={ItemSales} />
            <Route path="/admin/daily-sales" component={DailySalesReport} />


            {/* Default route */}
            <Route exact path="/">
              <Redirect to="/login" /> {/* Change this if your login path is different */}
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </OrdersProvider>
    </SalesProvider>
  );
}

export default App;