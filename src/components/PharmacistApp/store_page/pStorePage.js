import React, { useState } from 'react';
import './pStorePage.css';
import ProdCat from './pprodCat';
import Sidebar from '../../CustomerApp/store_page/sidebar';

function StorePage({searchValue}) {


  const brands = ['Cold and Flu', 'Skincare', 'Headaches and pain relief', 'Digestion', 'Allergy', 'First aid'];
  const initialCheckedState = brands.reduce((acc, brand) => {
    acc[brand] = false;
    return acc;
  }, {});

  const [isChecked, setIsChecked] = useState(initialCheckedState);

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
        <ProdCat isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} searchValue = {searchValue}/>
      </div>
    </div>
  );
}

export default StorePage;
