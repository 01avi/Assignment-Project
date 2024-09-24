import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-image">
        <h1>Time to Get Serious</h1>
      </div>

      <div className="contact-form">
        <h2>Contact An Attorney</h2>
        <form>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              required
            />
          </div>
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="email" name="email" placeholder="Email" required />
          <select name="new-client" required>
            <option value="" disabled>
              Are You a New Client?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">SEND INFORMATION</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
