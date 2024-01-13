import React from 'react';
import { Link } from 'react-router-dom';

import './pNavbar.css';

import locationImage from './location.png';
import phindrLogo from './phindrlogo.png';
import loginImg from './loginicon.png';
import basketImg from './basketicon.png';
import searchIcon from './searchIcon.png'

function PharmacistNavbar() {
  return (
    <div >
      <div className="pnavbar-top">
        <h3>
        </h3>
        <h4>
          <img src={locationImage} alt="Location" className='location-icon-pnavbar'/>
          Paddington
        </h4>
      </div>

      <div className='navbar-2'>
        <div>
          <Link to = "../pharmacist-home">
            <img src={phindrLogo} alt="phindr" className='phindr-logo-pnavbar'/>
          </Link>
        </div>

        <form className='drug-form'>
          <input type="text" id="username" name="username" placeholder='Search Drug' className='input-field-pnavbar'/>
          <div className='search-icon'>
            <img src={searchIcon} alt="Search" />
          </div>
        </form>

        <div className='container'>
          <Link to = "../">
            <div className='LoginIcon'>
              <img src={loginImg} alt='Login' className='login-img' />
              <h5> Logout </h5>
            </div>
          </Link>
          
        </div>
      </div>

      <div className='navbar-3'>
        <Link to="/pharmacist-home" className="navbar-section">
          <h4> Search by Category </h4>
        </Link>
        <div className="vl2"></div>
        <Link to="/pharmacist-map" className="navbar-section">
          <h4> Store Map Lookup </h4>
        </Link>
        <div className="vl2"></div>
        <Link to="/orders" className="navbar-section">
          <h4> Customer Orders </h4>
        </Link>
      </div>
    </div>
  );
}

export default PharmacistNavbar;
