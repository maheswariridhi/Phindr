import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/CustomerApp/navbar/Navbar';
import StorePage from './components/CustomerApp/store_page/storePage';
import LoginPage from './components/CustomerApp/login_page/login'
import ProductPage from './components/CustomerApp/product_page/productPage';
import CheckoutPage from './components/CustomerApp/checkout_page/checkoutPage';
import BasketPage from './components/CustomerApp/store_page/basket_components/basket'
import PharmacistStorePage from './components/CustomerApp/store_page/pStorePage';
import PharmacistNavbar from './components/CustomerApp/pharmacist-navbar/pNavbar';
import PharmacistProductPage from './components/CustomerApp/product_page/pproductPage';

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

  return (
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
            <Navbar />
            <StorePage />
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

          <Route exact path="/basket">
            <Navbar />
            <BasketPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;