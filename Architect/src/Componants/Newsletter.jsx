import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h3>SIGN UP TO OUR NEWSLETTER</h3>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="📫 Enter Your Email Address"
          required
        />
        <button type="submit">Subscribe Now </button>
      </form>
    </div>
  );
};
export default Newsletter;
