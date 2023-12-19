import React, { useState } from 'react';
import './storePage.css';
import ProdCat from './prodCat';

function StorePage() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="page-container">
      <div className="filter-container">
        <h2 className='Box-Text'>
          Filter By:
        </h2>
        
        <h2 className='Box-Text1'>
          Brand
        </h2>
        <div className='check-container'>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
            Dettol
          </label>

          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
            Elastoplast
          </label>

          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
            TCP
          </label>
          <div className="vertical-line"></div>
          {/* Your other content */}
        </div>
      </div>
      <div className="prod-cat-container">
        <ProdCat />
      </div>
    </div>
  );
}

export default StorePage;