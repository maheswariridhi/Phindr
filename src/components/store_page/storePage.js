import React, { useState } from 'react';
import './storePage.css';
import ProdCat from './prodCat';
import Sidebar from './sidebar';

function StorePage() {
  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];
  const initialCheckedState = brands.reduce((acc, brand) => {
    acc[brand] = false;
    return acc;
  }, {});

  const [isChecked, setIsChecked] = useState(initialCheckedState);
  console.log(isChecked);

  const handleCheckboxChange = (brand) => {
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [brand]: !prevChecked[brand],
    }));
  };

  return (
    <div className="page-container">
      <Sidebar isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} className='sidebar' />

      <div className="prod-cat-container">
        {/* Pass the state and functions to ProdCat */}
        <ProdCat isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
      </div>
    </div>
  );
}

export default StorePage;
