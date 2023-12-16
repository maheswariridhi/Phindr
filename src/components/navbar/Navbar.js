import React from 'react';
import './Navbar.css';

import locationImage from './location.png';
import phindrLogo from './phindrlogo.png';
import loginImg from './loginicon.png';
import basketImg from './basketicon.png';
import searchIcon from './searchIcon.png'

function Navbar() {
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
          <img src={phindrLogo} alt="phindr" className='phindr-logo'/>
        </div>

        <form className='drug-form'>
          <input type="text" id="username" name="username" placeholder='Search Drug' className='input-field'/>
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
            <h5> Basket </h5>
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
