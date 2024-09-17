import "./ConnectionSeaction.css";
const ConnectSection = () => {
  return (
    <section className="connect-section">
      <h3>
        WANT TO CONNECT <span>WITH AN ARCHITECT ?</span>
      </h3>
      <div className="steps">
        <div className="step">
          <img
            src="https://cdn-icons-png.flaticon.com/512/48/48639.png"
            alt="Search"
          />
          <p>Search</p>
        </div>
        <div className="step">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkt04PUWeUEDtgx9yNaFbnCHb_47bQG0T6Q&s"
            alt="Reach Out"
          />
          <p>Reach Out</p>
        </div>
        <div className="step">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkZrm5KKt55AZsbzAmPYRuMmln71O5ZFPJg&s"
            alt="Consultation"
          />
          <p>Consultation</p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
