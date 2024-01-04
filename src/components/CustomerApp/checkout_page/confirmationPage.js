import React from 'react';
import { useHistory } from 'react-router-dom';
import './confirmationPage.css'; // Make sure to create and link a CSS file for styling

const ConfirmationPage = () => {
  const history = useHistory();

  // Function to handle the navigation back to the home page
  const handleGoHome = () => {
    history.push('/home'); // This navigates to the home route
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-message">
        <h2>Thank You!</h2>
        <p>Your action has been successfully completed.</p>
        <button onClick={handleGoHome} className="go-home-button">
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
