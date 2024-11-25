/*This page is written by Eric Newton.*/

import React, { useState } from 'react';
import './signup.css';
import assetImage from '../images/blips.jpg'; // Import the image
import { FaCheckCircle, FaEnvelope, FaPhone } from "react-icons/fa"; // Import Font Awesome icons


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignInSuccess, setIsSignInSuccess] = useState(false);

  const handleSignIn = () => {
    if (!username || !email || !password || !dob) {
      setIsFormSubmitted(true);
      setErrorMessage('Please fill in all the missing details.');
    } else {
      // Simulate sign-in process (replace with actual authentication logic)
      setIsSignInSuccess(true);
    }
  };

  return (
    <div className="app-container">
      <div className="image-container">
        <img src={assetImage} alt="Asset" /> {/* Use the imported image */}
      </div>
      <div className="login-form">
        {isSignInSuccess ? (
          <div className="success-message">Happy Trading!</div>
        ) : (
          <>
            <h2>Welcome Folks!</h2>
            <p>Welcome to DEX trading platform. Please sign in with your info.</p>
            {isFormSubmitted && (!username || !email || !password || !dob) && (
              <div className="error-message">{errorMessage}</div>
            )}
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <button className="action-button" onClick={handleSignIn}>
                Sign In
              </button>
            </form>
            <p className="forgot-password-link">Forgot Password</p>
          </>
        )}
      </div>

	  <footer className="footer">
      <div className="footer-content">
        <div className="left-section">
          <p>DEX</p> {/* Brand name */}
        </div>
        <div className="middle-section">
          <p>
            <FaEnvelope /> info@example.com {/* Email */}
          </p>
        </div>
        <div className="right-section">
          <p>
            <FaPhone /> +1 (123) 456-7890 {/* Phone number */}
          </p>
        </div>
      </div>
      <p>&copy; 2023 Trading Platform. All rights reserved.</p>
    </footer>

    </div>
  );
};

export default SignUp;

