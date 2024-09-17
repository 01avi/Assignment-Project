import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section: Logo and tagline */}
        <div className="footer-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oYBDyTlsQEl2M_B-GqF1PPryFy1H-34ZeA&s"
            alt="Logo"
            className="footer-logo"
          />
          <div>
            <h3>Insightful Architects</h3>
            <p>Connecting you with architects</p>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Architects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-right">
          <h4>Get In Touch</h4>
          <p>
            <i className="fa fa-map-marker"></i> 1234 Lorem ipsum, Suite 400,
            Sacramento, CA 12345
          </p>
          <p>
            <i className="fa fa-phone"></i> 888-123-4567
          </p>
          <p>
            <i className="fa fa-envelope"></i> info@insightfularchitects.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Insightful Architects, all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
