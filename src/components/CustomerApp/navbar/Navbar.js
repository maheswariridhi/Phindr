import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import locationImage from './location.png';
import phindrLogo from './phindrlogo.png';
import loginImg from './loginicon.png';
import basketImg from './basketicon.png';
import homeIcon from './homeIcon.png'
import searchIcon from './searchIcon.png';
import { AuthContext } from '../authContext';



function Navbar({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('');
  };

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
      <div className="pnavbar-top">
        <h3>
        </h3>
        <h4>

          <img src={locationImage} alt="Location" className='location-icon-pnavbar'/>
        
        </h4>
      </div>

      <div className='navbar-2'>
        <div>
          <Link to = "../home">
            <img src={phindrLogo} alt="phindr" className='phindr-logo-pnavbar'/>
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
            data-testid = "nav-1"
          />
          <div className='search-icon'>
            <img src={searchIcon} alt="Search" />
          </div>
        </form>

        <div className='container'>

        <div className='HomeIcon'>
            <img src={homeIcon} alt='Home' className='home-img' />
            <Link to = "../home">
              <h5> Home </h5>
            </Link>
          </div>

        <div className='LoginIcon'>
      <img src={loginImg} alt='Login' className='login-img' />
      {user ? (
        <h5 onClick={logout}>Logout</h5>
      ) : (
        <Link to="/login">
          <h5>Logout</h5>
        </Link>
      )}
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