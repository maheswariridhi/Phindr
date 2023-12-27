import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import StorePage from './components/store_page/storePage';
import LoginPage from './components/login_page/login'
import ProductPage from './components/product_page/productPage';
import CheckoutPage from './components/checkout_page/checkoutPage';
import BasketPage from './components/basket/basket'

import { Helmet } from 'react-helmet';
import PhindrLogo from './phindr.png';

import './App.css';
import Login from './components/login_page/login';

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

          <Route path="/product">
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
