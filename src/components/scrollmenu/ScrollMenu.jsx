import React, { useRef } from 'react';
import './ScrollMenu.css';

const ScrollMenu = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust this value based on how much you want to scroll
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust this value based on how much you want to scroll
      behavior: 'smooth',
    });
  };

  const menuItems = [
    'Our Services',
    'Curated Custom Service',
    'Winter Services',
    'How GoMechanic Works?',
    'Rating & Reviews',
    'Frequently asked questions'
    
  ];

  return (
    <div className="scroll-menu-wrapper">
      <button className="arrow-btn left" onClick={scrollLeft}>&lt;</button>
      <div className="scroll-menu" ref={scrollContainerRef}>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="arrow-btn right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default ScrollMenu;
