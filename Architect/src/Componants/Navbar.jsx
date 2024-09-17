import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oYBDyTlsQEl2M_B-GqF1PPryFy1H-34ZeA&s"
          alt="Logo"
          className="logo"
        />
        <div className="brand-text">
          <h1>Insightful Architects</h1>
          <p>Connecting you with architects</p>
        </div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#architects">Architects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="navbar-button">Login</button>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={`line ${isMobileMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMobileMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMobileMenuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
