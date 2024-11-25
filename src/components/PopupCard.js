/*Abraar Mohiuddin Syed
103795990*/
//This is the page that opens opens up the details of an Asset when clicked. It also redirects to Trading Page.
import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./PopupCard.css";
import image from '../images/trex.gif';

const PopupCard = ({ card, onClose }) => {
  return (
    <div className="popup-card">
      <img src={image} alt={card.title} className="popup-card-image" />
      <h2 className="popup-card-title">{card.title}</h2>
      <p className="popup-card-description">{card.description}</p>
      <div className="popup-card-actions">
        <Link to="../trading">
          <button className="popup-card-buy-button">Buy Now</button>
        </Link>
        <button className="popup-card-cart-button">
          <FaShoppingCart /> {/* Add the cart icon */}
        </button>
      </div>
      <button className="popup-card-close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default PopupCard;


