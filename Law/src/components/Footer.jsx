import "./Footer.css";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-map-container">
        <div className="contact-information">
          <h2>Contact Us</h2>
          <p>
            {" "}
            <CiLocationOn className="icons" />
            <b> Staubus & Randall LLP</b> <br />
            8401 N Central Expy, Ste 210 Dallas, TX 75225
            <br />
            <br />
            <CiPhone className="icons" />
            <strong> Phone:</strong> 214-601-3411
            <br />
            <br />
            <MdOutlineMail className="icons" />
            <strong> Email:</strong> info@srllp.com
          </p>
        </div>
        <iframe
          className="footer-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.0482138053817!2d-96.76883942421417!3d32.8641674757471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c202a7c5eac2d%3A0x46824a912b8e71fe!2sStaubus%20%26%20Randall%20LLP!5e0!3m2!1sen!2sus!4v1605654678480!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
