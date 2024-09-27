import { useState } from "react";
import "./Navbar.css"; // Create a CSS file to style the navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#services">WHAT WE DO</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
        <button className="quote-button">GET A QUOTE</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
