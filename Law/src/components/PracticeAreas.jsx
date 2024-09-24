import { useState } from "react";
import "./PracticeAreas.css";

function PracticeAreas() {
  const [showAll, setShowAll] = useState(false);

  const areas = [
    { title: "Ancillary Probate", image: "image path.jpg" },
    { title: "Estate Administration", image: "image path.jpg2" },
    { title: "Fiduciary Litigation", image: "image path.jpg3" },
    { title: "International Probate", image: "image path.jpg4" },
    { title: "Inheritance Rights", image: "image path.jpg5" },
    { title: "Power of Attorney Disputes", image: "image path.jpg6" },
    { title: "Probate Litigation", image: "image path.jpg7" },
    { title: "Probatings Wills", image: "image path.jpg8" },
    { title: "Trust Modification", image: "image path.jpg9" },
  ];

  const displayedAreas = showAll ? areas : areas.slice(0, 9);

  return (
    <section id="practice" className="practice-areas">
      <h2>Our Practice Areas</h2>
      <div className="area-grid">
        {displayedAreas.map((area, index) => (
          <button
            key={index}
            className={`area-card ${index % 2 === 0 ? "even" : "odd"} ${
              area.title === "Inheritance Rights" ? "active" : ""
            }`}
          >
            <div className="icon">
              <img src={area.image} alt={area.title} />
            </div>
            <div className="title">{area.title}</div>
          </button>
        ))}
      </div>
      <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "View All Practices"}
      </button>
    </section>
  );
}

export default PracticeAreas;
