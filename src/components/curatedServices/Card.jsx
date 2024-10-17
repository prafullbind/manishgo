import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Assuming you use react-icons for the arrow
import './Card.css'; // Your custom CSS

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Miles</h2>
        <p>Free Road Side Assistance</p>
      </div>
      <FiArrowRight className="arrow-icon" />
      {/* <img src="/path-to-image" alt="Car illustration" className="card-image" /> */}
    </div>
  );
};

export default Card;
