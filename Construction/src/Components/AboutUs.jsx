import "./AboutUs.css";
import { FaBuilding, FaPaintBrush } from "react-icons/fa";
import { GiDigDug } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="scroll-indicator">
        <span>⬇</span>
      </div>
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://cdn.cpdonline.co.uk/wp-content/uploads/2023/03/04151341/Everything-you-need-to-know-about-Construction-Site-Safety.jpg"
            alt="About Us"
          />
        </div>
        <div className="about-text">
          <h3>LOREM IPSUM DOLOR SIT AMET</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <div className="services">
            <div className="service-item">
              <span>
                <FaBuilding />
              </span>{" "}
              BUILDING
            </div>
            <div className="service-item">
              <span>
                <FaPaintBrush />
              </span>{" "}
              RENOVATION
            </div>
            <div className="service-item">
              <span>
                <GiDigDug />
              </span>{" "}
              DIGGING
            </div>
            <div className="service-item">
              <span>
                <IoHome />
              </span>{" "}
              INTERIOR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
