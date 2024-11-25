/*Abraar Mohiuddin Syed
103795990
This is the Assets Page which displays assets available and offers a Search Menu for the user.
*/

import React, { useState } from "react";
import PopupCard from "../components/PopupCard"; // Import the PopupCard component
import "./assets.css"; 
import image from "../images/blips.jpg"; 
import genesis from "../images/genesis.png";
import circles from "../images/circles.png"; 
import gome from "../images/gome.png"; 
import nft from "../images/nft.gif"; 
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaUp,
} from "react-icons/fa"; // Import Font Awesome icons

import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Assets = () => {
  const initialCards = [
    { title: "Lona Misa", description: "Seller: LinkPops           Price: 33 ETH" },
    { title: "Ethereum", description: "Seller: CandyT           Price: 20 ETH" },
    { title: "Bitcoin", description: "Seller: SeesHHH           Price: 42 ETH" },
    { title: "Lona Misa", description: "Seller: Toinga           Price: 11 ETH" },
    { title: "MozartArt", description: "Seller: Coinslore           Price: 23 ETH" },
    { title: "Va Dinci", description: "Seller: More211           Price: 7 ETH" },
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isArrowForwardClickable, setIsArrowForwardClickable] = useState(
    true
  );
  const [isArrowBackwardClickable, setIsArrowBackwardClickable] = useState(
    false
  );

  const showNextCard = () => {
    if (isArrowForwardClickable) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setSliderPosition((prevPosition) => prevPosition - 100);
      setIsArrowForwardClickable(false);
      setIsArrowBackwardClickable(true);
    }
  };

  const showPreviousCard = () => {
    if (isArrowBackwardClickable) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
      setSliderPosition((prevPosition) => prevPosition + 100);
      setIsArrowForwardClickable(true);
      setIsArrowBackwardClickable(false);
    }
  };

  const additionalCardsArt = [
    {
      title: "Cardano",
      description: "Asset #1234567Seller: Crypto Investments",
      price: "Price: 40 ETH",
      link: "/popup",
      imageSrc: nft, // 
    },
    {
      title: "Ethereum Classic",
      description: "Asset #9876543\nSeller: Crypto Ventures",
      price: "Price: 30 ETH",
      link: "/popup",
      imageSrc: gome, 
    },
    {
      title: "Solana",
      description: "Asset #5678912\nSeller: Solana Traders",
      price: "Price: 50 ETH",
      link: "/popup",
      imageSrc: circles, 
    },
    {
      title: "Polygon",
      description: "Asset #2345678\nSeller: Polygon Deals",
      price: "Price: 25 ETH",
      link: "/popup",
      imageSrc: genesis, 
    },
  ];

  const additionalCardsPhotography = [
    {
      title: "Photography 1",
      description: "Photography Description 1",
      price: "Price: 20 ETH",
      link: "/popup",
      imageSrc: circles, 
    },
    {
      title: "Photography 2",
      description: "Photography Description 2",
      price: "Price: 15 ETH",
      link: "/popup",
      imageSrc: gome, 
    },
    {
      title: "Photography 3",
      description: "Photography Description 3",
      price: "Price: 18 ETH",
      link: "/popup",
      imageSrc: genesis, 
    },
    {
      title: "Photography 4",
      description: "Photography Description 4",
      price: "Price: 22 ETH",
      link: "/popup",
      imageSrc: nft, 
    },
  ];

  const additionalCardsGaming = [
    {
      title: "Game 1",
      description: "Game Description 1",
      price: "Price: 30 ETH",
      link: "/popup",
      imageSrc: gome, 
    },
    {
      title: "Game 2",
      description: "Game Description 2",
      price: "Price: 25 ETH",
      link: "/popup",
      imageSrc: circles, 
    },
    {
      title: "Game 3",
      description: "Game Description 3",
      price: "Price: 28 ETH",
      link: "/popup",
      imageSrc: nft, 
    },
    {
      title: "Game 4",
      description: "Game Description 4",
      price: "Price: 35 ETH",
      link: "/popup",
      imageSrc: genesis,
    },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedCard(null);
    setIsPopupVisible(false);
  };

  return (
    <div>
      <h1>Check out all our Collections!</h1>
      <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar-input"
      />
      <button className="search-bar-button">Search</button>
    </div>
      <h2> Top Buys Today</h2>
      <div className="card-slider">
  <div
    className="card-container"
    style={{ transform: `translateX(${sliderPosition}%)` }}
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className={`card ${index === currentIndex ? "active" : ""}`}
      >
        <img src={image} alt={card.title} className="card-image" />
        <h2 className="card-title">{card.title}</h2>
        <p className="card-text">{card.description}</p>
        <p style={{ textAlign: "center", color: "black" }}>
          <Link to="/trading" style={{ color: "black" }}>
            <b>BUY NOW</b>
          </Link>
        </p>
      </div>
    ))}
  </div>
</div>
<div
  className={`arrow forward ${
    isArrowForwardClickable ? "" : "disabled"
  }`}
  onClick={showNextCard}
>
  &rarr;
</div>
<div
  className={`arrow backward ${
    isArrowBackwardClickable ? "" : "disabled"
  }`}
  onClick={showPreviousCard}
>
  &larr;
</div>

{/* Popup Card */}
{isPopupVisible && selectedCard && (
  <div className="popup-overlay">
    <PopupCard card={selectedCard} onClose={closePopup} />
  </div>
)}


<h2 style={{ fontSize: '24px', marginLeft: '10px',marginTop:'20px'}}>Trending in Art</h2>
      <div className="acard-container">
        {additionalCardsArt.map((card, index) => (
          <div key={index} className="acard">
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.description}</p>
            <div
              className="card-price"
              style={{ textAlign: "right", color: "black" }}
            >
              {card.price}
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a
                href="#"
                style={{ color: "black" }}
                onClick={() => openPopup(card)}
              >
                <b>BUY NOW</b>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <h2 style={{ fontSize: '24px', marginLeft: '10px',marginTop:'20px'}}>Trending in Photography</h2>
      <div className="acard-container">
        {additionalCardsPhotography.map((card, index) => (
          <div key={index} className="acard">
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.description}</p>
            <div
              className="card-price"
              style={{ textAlign: "right", color: "black" }}
            >
              {card.price}
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a
                href="#"
                style={{ color: "black" }}
                onClick={() => openPopup(card)}
              >
                <b>BUY NOW</b>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '24px', marginLeft: '10px',marginTop:'20px'}}>Trending in Gaming</h2>
      <div className="acard-container">
        {additionalCardsGaming.map((card, index) => (
          <div key={index} className="acard">
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.description}</p>
            <div
              className="card-price"
              style={{ textAlign: "right", color: "black" }}
            >
              {card.price}
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a
                href="#"
                style={{ color: "black" }}
                onClick={() => openPopup(card)}
              >
                <b>BUY NOW</b>
              </a>
            </div>

          </div>

          
        ))}
        
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

export default Assets;








