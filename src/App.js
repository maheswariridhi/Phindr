import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import StorePage from './components/store_page/storePage';
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
      <Navbar />
      <StorePage />
    </div>
  );
}

export default App;
