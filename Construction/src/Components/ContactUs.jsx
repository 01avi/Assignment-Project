import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Left side - Contact Information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-person">
          <h3>Edward Hagman</h3>
          <p>Deputy Seller</p>
          <p>+46 905 444 222</p>
          <p>edward@entrepreneur.no</p>
        </div>
        <div className="contact-person">
          <h3>Lars Berland</h3>
          <p>Project Advisor / Styrelsesman</p>
          <p>+46 905 888 333</p>
          <p>lars@consulting.no</p>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Contact Number" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
