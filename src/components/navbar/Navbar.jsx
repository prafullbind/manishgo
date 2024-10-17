// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex justify-start items-center gap-2">
                <img src="/gomeclogo.png" alt="GoMechanic"  className='logo-image'/>
                <span>GoMechanic</span>
                <div className="location">
                    <select>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        {/* Add more cities */}
                    </select>
                </div>
            </div>

            <div className="nav-links">
                <a href="#blog">Blog</a>
                <a href="#more">More</a>
                <button className="login-btn">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
