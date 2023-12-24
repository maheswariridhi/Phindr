import React, { useState } from 'react';
import './storePage.css';
import ProdCat from './prodCat';
import Sidebar from './sidebar';

function StorePage() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="page-container">
      <Sidebar isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

      <div className="prod-cat-container">
        <ProdCat />
      </div>
    </div>
  );
}

export default StorePage;