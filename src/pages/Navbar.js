import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import logo from "./images/lo.png";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavToggle = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick = () => {
        setShowNav(false);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">
                    {/* <img src={logo} alt="logo" /> */}
                    WEST24
                </Link>
                <button className="navbar-toggle" onClick={handleNavToggle}>
                    <span className="navbar-toggle-icon">{showNav ? '×' : '☰'}</span>
                </button>
                <ul className={`navbar-menu ${showNav ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>O nas</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Oferta</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Kontakt</Link>
                    </li>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;