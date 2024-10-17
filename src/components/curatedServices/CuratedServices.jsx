// CuratedServices.jsx
import React, { useRef } from 'react';
import './CuratedServices.css';
import { FaBatteryHalf, FaCarCrash, FaCogs, FaWheelchair, FaTachometerAlt, FaTools, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiCarDoor, GiCarWheel } from 'react-icons/gi'; // Removed GiSuspension and kept others
import { BsFillLightbulbFill } from 'react-icons/bs';
import { IoIosBody } from 'react-icons/io';
import Card from './Card';

const CuratedServices = () => {
  const servicesRef = useRef(null);

  const scrollLeft = () => {
    servicesRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    servicesRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // All services combined (from both images)
  const services = [
    { name: 'Batteries', icon: <FaBatteryHalf size={40} /> },
    { name: 'Brakes', icon: <FaCarCrash size={40} /> },
    { name: 'AC Parts', icon: <FaCogs size={40} /> },
    { name: 'Clutch', icon: <FaWheelchair size={40} /> },
    { name: 'Tyres', icon: <FaTachometerAlt size={40} /> },
    { name: 'Steering', icon: <FaTools size={40} /> },
    { name: 'Suspension', icon: <FaCarCrash size={40} /> }, // Replaced GiSuspension with FaCarCrash
    { name: 'GoConnect 2.0', icon: <GiCarWheel size={40} />, isNew: true },
    { name: 'Lights', icon: <BsFillLightbulbFill size={40} /> },
    { name: 'Body Parts', icon: <IoIosBody size={40} /> },
    { name: 'Glasses', icon: <GiCarDoor size={40} /> }
  ];

  return (
    <div className="curated-services">
      <div className="services-section">
        <h2>Curated Custom Services</h2>
        <div className="scroll-controls">
          <button className="scroll-button left" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <div className="services-icons" ref={servicesRef}>
            {services.map((service, index) => (
              <div className={`service ${service.isNew ? 'new' : ''}`} key={index}>
                {service.icon}
                <p>{service.name}</p>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuratedServices;
