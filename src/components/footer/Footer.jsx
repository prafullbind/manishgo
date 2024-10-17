import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // React Icons
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">GoMechanic Partners</a></li>
                        <li><a href="#">Workshop Locator</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Directory</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>OUR SERVICES</h4>
                    <ul>
                        <li><a href="#">Scheduled Services</a></li>
                        <li><a href="#">AC Services</a></li>
                        <li><a href="#">Cleaning & Detailing</a></li>
                        <li><a href="#">Lights & Fitments</a></li>
                        <li><a href="#">Denting Painting</a></li>
                        <li><a href="#">Insurance Services</a></li>
                        <li><a href="#">Custom Repair</a></li>
                        <li><a href="#">Batteries</a></li>
                        <li><a href="#">Tyres</a></li>
                        <li><a href="#">Detailing Services</a></li>
                        <li><a href="#">Windshields & Glass</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>LUXURY BRANDS</h4>
                    <ul>
                        <li><a href="#">Mercedes</a></li>
                        <li><a href="#">BMW</a></li>
                        <li><a href="#">Audi</a></li>
                        <li><a href="#">Volvo</a></li>
                        <li><a href="#">Mitsubishi</a></li>
                        <li><a href="#">Jaguar</a></li>
                        <li><a href="#">Porsche</a></li>
                        <li><a href="#">Rolls Royce</a></li>
                        <li><a href="#">Ferrari</a></li>
                        <li><a href="#">Land Rover</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>POPULAR BRANDS</h4>
                    <ul>
                        <li><a href="#">Maruti Suzuki</a></li>
                        <li><a href="#">Hyundai</a></li>
                        <li><a href="#">Honda</a></li>
                        <li><a href="#">Toyota</a></li>
                        <li><a href="#">Tata</a></li>
                        <li><a href="#">Mahindra</a></li>
                        <li><a href="#">Chevrolet</a></li>
                        <li><a href="#">Fiat</a></li>
                        <li><a href="#">Renault</a></li>
                        <li><a href="#">Kia</a></li>
                        <li><a href="#">Skoda</a></li>
                        <li><a href="#">Volkswagen</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>POPULAR AREAS NEAR YOU</h4>
                    <ul>
                        <li><a href="#">Garage near me in Vasant Kunj</a></li>
                        <li><a href="#">Garage near me in Dwarka</a></li>
                        <li><a href="#">Garage near me in Mayur Vihar</a></li>
                        <li><a href="#">Garage near me in Chattarpur</a></li>
                        <li><a href="#">Garage near me in Karol Bagh</a></li>
                        <li><a href="#">Garage near me in Patparganj</a></li>
                        <li><a href="#">Garage near me in Rohini</a></li>
                        <li><a href="#">Garage near me in Greater Kailash</a></li>
                        <li><a href="#">Garage near me in Connaught Place</a></li>
                        <li><a href="#">Garage near me in Vikas Puri</a></li>
                        <li><a href="#">Garage near me in Hauz Khas</a></li>
                        <li><a href="#">Garage near me in Pitam Pura</a></li>
                        <li><a href="#">Garage near me in Punjabi Bagh</a></li>
                        <li><a href="#">Garage near me in Shalimar Bagh</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <div className="footer-contact">
                        <p>7th Floor, Tower A, Spaze iTech Park, Sohna - Gurgaon Rd, Block S, Sector 49, Gurugram, Haryana 122018</p>
                        <p><a href="mailto:info@gomechanic.in">info@gomechanic.in</a></p>
                        <p><a href="tel:+919388893888">+91 9388893888</a></p>
                        <p>Working Days: Monday - Sunday</p>
                        <p>Working Hours: 7:00AM - 9:00PM (IST)</p>
                    </div>
                    <div className="app-links">
                        <a href="#" className="app-store">
                            <img src="link-to-google-play-image" alt="Google Play" />
                        </a>
                        <a href="#" className="app-store">
                            <img src="link-to-app-store-image" alt="App Store" />
                        </a>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
