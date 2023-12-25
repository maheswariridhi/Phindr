import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory

import './login.css';
import PhindrLogo from './phindrlogo.png';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked!');
    // Redirect to a different page, for example, /dashboard
    history.push('/home'); // Change '/dashboard' to the desired route
  };

  return (
    <div className="login-container">
      <img src={PhindrLogo} alt="Phindr Logo" className="login-logo" />

      <h4>E-mail: </h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="E-Mail Address"
      />

      <h4>Password: </h4>
      <input
        type="password"
        value={inputValue2}
        onChange={handleInputChange2}
        placeholder="Password"
      />

      <button onClick={handleClick}>Log in</button>

      <h5>Login as Guest</h5>
    </div>
  );
}

export default Login;
