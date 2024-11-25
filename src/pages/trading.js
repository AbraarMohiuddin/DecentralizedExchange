/*This page is written by Eric Newton.*/

import React, { useState, useEffect } from 'react';
import './trading.css';
import assetImage from '../images/nft.gif'; // Make sure to import your asset image

const Trading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false);

  const handleTradeStart = () => {
    setIsLoading(true);

    // Simulate the transaction process (replace with actual smart contract interaction)
    setTimeout(() => {
      setIsLoading(false);
      setIsTransactionSuccessful(true);
    }, 2000); // Simulating a 2-second delay
  };

  useEffect(() => {
    if (isTransactionSuccessful) {
      // Simulate resetting the transaction state after a delay
      const timeout = setTimeout(() => {
        setIsTransactionSuccessful(false);
      }, 5000); // Message shown for 5 seconds

      return () => clearTimeout(timeout);
    }
  }, [isTransactionSuccessful]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>DEX Trading Platform</h1>
      </header>
      <main className="app-main">
        {isLoading ? (
          <div className="loading-buffer">
            <p>Checking payment...</p>
            <p>Building Smart Contract...</p>
          </div>
        ) : isTransactionSuccessful ? (
          <div className="success-message">
            <p>Transaction Successful!</p>
          </div>
        ) : (
          <div className="asset-container">
            <div className="purchase-info">
              <div className="top-left">
                <p className="purchase-title">PURCHASE NFT</p>
                <p className="purchase-description">Monk NFT#3669</p>
                <p className="purchase-description">DEX Trading Platform</p>
                <p className="view-chain">View item on chain</p>
              </div>
              <div className="asset-image-container">
                <img src={assetImage} alt="Asset" className="asset-image" />
              </div>
              <div className="summary">
                <p className="summary-text">Summary</p>
                <p className="summary-description">Monk NFT#3669</p>
                {/* Remove network fees from the summary */}
              </div>
              <div className="asset-details">
                <div className="price">
                  <p className="price-text">Price</p>
                  <p className="price-value">24 ETH</p>
                </div>
                <div className="fees">
                  <p className="fees-text">Network fees</p>
                  <p className="fees-value">$23</p>
                  <p className="view-fees">View fees</p>
                </div>
                <div className="total">
                  <p className="total-text">Total</p>
                  <p className="total-value">$8,500</p>
                </div>
              </div>
            </div>
            <button className="action-button" onClick={handleTradeStart}>
              BUY NOW
            </button>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Trading Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Trading;

