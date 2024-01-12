import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory

import './login.css';
import PhindrLogo from './phindrlogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (email === 'customer@email.com' && password === 'customer1') {
      console.log('Login successful!');
      history.push('/home');
    } else {
      setErrorMessage('Incorrect username/password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={PhindrLogo} alt="Phindr Logo" className="login-logo" />

      <h4>E-mail: </h4>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="E-Mail Address"
      />

      <h4>Password: </h4>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button onClick={handleLogin}>Log in</button>

      <h5>Login as Guest</h5>
    </div>
  );
}

export default Login;
