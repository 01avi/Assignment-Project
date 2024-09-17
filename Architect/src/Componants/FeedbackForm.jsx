import "./FeedbackForm.css";
const FeedbackForm = () => {
  return (
    <div className="feed">
      <section className="feedback-form">
        <h3>Have Any Feedback For Us? Contact Us Today</h3>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Id" />
          <input type="tel" placeholder="Contact Number" />
          <textarea placeholder="Comment"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default FeedbackForm;
