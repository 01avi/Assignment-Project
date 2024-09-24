import "./Footer2.css";

const Footer2 = () => {
  return (
    <footer2 className="footer2">
      <div className="footer2-top">
        <div className="footer2-logo-social">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-foo1Ocwo78vDHgrgy6feRSu__AK89wDPXg&s"
            alt="Staubus & Randall LLP"
            className="footer2-logo"
          />
          <div className="social-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="footer2-links">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Practice Areas</li>
            <li>Our Team</li>
            <li>Blog</li>
            <li>News & Resources</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer2-contact">
          <h3>Get in Touch</h3>
          <p>
            <i className="fa fa-globe"></i> Staubus & Randall LLP
          </p>
          <p>8401 N Central Expy, Ste 210</p>
          <p>Dallas, TX 75225</p>
          <p>
            <i className="fa fa-phone"></i> 214-691-3411
          </p>
          <p>
            <i className="fa fa-envelope"></i> info@srllp.com
          </p>
        </div>
        <div className="footer2-subscribe">
          <h3>Subscribe to Us</h3>
          <p>Get the latest update and tips weekly</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="footer2-bottom">
        <p>
          &copy; Copyright 2020. Staubus & Randall LLP. All rights reserved.
        </p>
      </div>
    </footer2>
  );
};

export default Footer2;
