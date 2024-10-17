import React from 'react';
import { FaCar, FaBatteryHalf, FaThermometerHalf, FaTools, FaShieldAlt, FaPumpSoap, FaWrench, FaCarSide, FaSprayCan, FaTint } from 'react-icons/fa';
import './CarServices.css';

const services = [
    { name: 'Periodic Services', icon: <FaCar /> },
    { name: 'AC Service & Repair', icon: <FaThermometerHalf /> },
    { name: 'Batteries', icon: <FaBatteryHalf /> },
    { name: 'Tyres & Wheel Care', icon: <FaCarSide /> },
    { name: 'Denting & Painting', icon: <FaSprayCan /> },
    { name: 'Detailing Services', icon: <FaTint /> },
    { name: 'Car Spa & Cleaning', icon: <FaPumpSoap /> },
    { name: 'Car Inspections', icon: <FaTools />, new: true },
    { name: 'Windshields & Lights', icon: <FaTools /> },
    { name: 'Suspension & Fitments', icon: <FaWrench /> },
    { name: 'Clutch & Body Parts', icon: <FaTools />, new: true },
    { name: 'Insurance Claims', icon: <FaShieldAlt /> }
];

const CarServices = () => {
    return (
        <div className="services-container">
            <h2 className='font-bold text-2xl'>Car Services Available In Delhi</h2>
            <p>Get hassle-free and professional car service, car repair, wheel care services, cashless insurance claim and much more in New Delhi.</p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="icon-wrapper">{service.icon}</div>
                        <span>{service.name}</span>
                        {service.new && <span className="new-badge">New</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarServices;
