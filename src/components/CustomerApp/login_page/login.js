
import { useHistory } from 'react-router-dom'; // Import useHistory
import './login.css';
import PhindrLogo from './phindrlogo.png';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../authContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory();
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 // Handler for guest login
 const handleGuestLogin = () => {
  history.push('/home');
};

  
  const handleLogin = () => {
    // ... existing login logic ...
    if (email === 'customer@email.com' && password === 'customer1') {
      login({ type: 'customer' });
      history.push('/home');
    } else if (email === 'pharmacist@email.com' && password === 'pharmacist1') {
      login({ type: 'pharmacist' });
      history.push('/pharmacist-home');
    } else if (email === 'admin@email.com' && password === 'admin1') {
      console.log('Admin login successful!');
      history.push('/admin-home');
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
      <button className="guest-button" onClick={handleGuestLogin}>Login as Guest</button>
    </div>
  );
}

export default Login;
