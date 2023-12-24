import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import StorePage from './components/store_page/storePage';
import ProductPage from './components/product_page/productPage';
import CheckoutPage from './components/checkout_page/checkoutPage';
import { Helmet } from 'react-helmet';
import PhindrLogo from './phindr.png';

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
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <StorePage />
            </Route>

            <Route exact path = "/product">
              <ProductPage />
            </Route>

            <Route exact path = "/checkout">
              <CheckoutPage />
            </Route>

          </Switch>
        </div>
        
      </Router>
        
        
    </div>
  );
}

export default App;
