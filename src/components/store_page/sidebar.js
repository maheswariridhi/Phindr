import React, { useState } from 'react';

function Sidebar({ isChecked, handleCheckboxChange }) {
  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];
  
  return (
    <div className="filter-container">
      <h2 className='Box-Text'>
        Filter By:
      </h2>
      <h2 className='Box-Text1'>
        Category:
      </h2>
      <div className='check-container'>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={isChecked[brand]}
              onChange={() => handleCheckboxChange(brand)}
              className="custom-checkbox"
            />
            {brand}
          </label>
        ))}
        <div className="vertical-line"></div>
        {/* Your other content */}
      </div>
    </div>
  );
}

export default Sidebar;
