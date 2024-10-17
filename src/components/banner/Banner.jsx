import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="form-container">
        <h1>Experience The Best Car Services In Delhi</h1>
        <p>Get instant quotes for your car service</p>
        <select>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        <select>
          <option>Select Your Car</option>
          <option value="car1">Car Model 1</option>
          <option value="car2">Car Model 2</option>
        </select>
        <input type="text" placeholder="Enter Mobile Number" />
        <button className="check-prices-btn">CHECK PRICES FOR FREE</button>

        <div className="ratings">
          <div>
            <span className="rating">4.7/5</span>
            <p>Based on 150000+ Reviews</p>
          </div>
          <div>
            <p>15 Lacs+ <br /> Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
