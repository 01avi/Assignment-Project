import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = activeSection;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-foo1Ocwo78vDHgrgy6feRSu__AK89wDPXg&s"
            alt="Staubus Randall Logo"
          />
        </div>
        <div className="contact-info">
          <p className="consult-text">Call a Free Consultation</p>
          <p className="phone-number">214-691-3411</p>
        </div>
        <a href="#contact">
          <button className="btn-consult">FREE CONSULTATION</button>
        </a>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home">HOME</a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">ABOUT US</a>
          </li>
          <li className={activeSection === "practice" ? "active" : ""}>
            <a href="#practice">PRACTICE AREAS</a>
          </li>
          <li className={activeSection === "team" ? "active" : ""}>
            <a href="#team">OUR TEAM</a>
          </li>
          <li className={activeSection === "blog" ? "active" : ""}>
            <a href="#blog">BLOG</a>
          </li>
          <li className={activeSection === "news" ? "active" : ""}>
            <a href="#news">NEWS & RESOURCES</a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
