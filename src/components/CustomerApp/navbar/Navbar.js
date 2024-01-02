import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import locationImage from './location.png';
import phindrLogo from './phindrlogo.png';
import loginImg from './loginicon.png';
import basketImg from './basketicon.png';
import searchIcon from './searchIcon.png';

function Navbar({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

    // Invoke the callback to lift the search value state
    if (onSearchChange) {
      onSearchChange(newValue);
    }
  };

  // Function to handle form submission (you can customize this)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the search, for example, navigating to a search results page
    // console.log('Search submitted:', searchValue);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-top">
        <h3>
          Store Map Lookup
          <div className="vl"></div>
        </h3>
        <h4>
          <img src={locationImage} alt="Location" className='location-icon'/>
          Paddington
        </h4>
      </div>

      <div className='navbar-2'>
        <div>
          <Link to = "../home">
            <img src={phindrLogo} alt="phindr" className='phindr-logo'/>
          </Link>
        </div>

        <form className='drug-form' onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Search Drug'
            className='input-field'
            value={searchValue}
            onChange={handleSearchChange}
          />
          <div className='search-icon'>
            <img src={searchIcon} alt="Search" />
          </div>
        </form>

        <div className='container'>
          <div className='LoginIcon'>
            <img src={loginImg} alt='Login' className='login-img' />
            <h5> Login/Register </h5>
          </div>

          <div className='BasketIcon'>
            <img src={basketImg} alt='Basket' className='basket-img' />
            <Link to = "../basket">
              <h5> Basket </h5>
            </Link>
          </div>
        </div>
      </div>

      <div className='navbar-3'>
          <h4> Search by Category </h4>
          <div className="vl2"></div>
      </div>
    </div>
  );
}

export default Navbar;
