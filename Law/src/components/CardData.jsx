import { useState } from "react";
import "./CardData.css";

const CardData = [
  {
    id: 1,
    icon: "💼", // Replace it with actual icon/image.
    title: "Will Contests",
    description:
      "Staubus Randall are experienced in handling will contest cases which are often very complex and fact-specific.",
    fullContent:
      "Will contests are often highly complex legal cases that require specific expertise in estate litigation.",
  },
  {
    id: 2,
    icon: "👥",
    title: "Guardianships",
    description:
      "Staubus Randall are experienced in handling guardianship cases which are often very complex and fact-specific.",
    fullContent:
      "Guardianship cases involve appointing guardians for minors or incapacitated adults, which requires careful legal handling.",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Estate Planning",
    description:
      "Staubus Randall are experienced in estate planning to ensure your assets are managed as you wish.",
    fullContent:
      "Estate planning ensures that your assets are distributed according to your desires and helps to minimize taxes and complications.",
  },
  {
    id: 4,
    icon: "⚖️",
    title: "Trustee Disputes",
    description:
      "Staubus Randall are experienced in resolving trustee disputes with skill and legal expertise.",
    fullContent:
      "Trustee disputes can lead to complicated legal challenges. Our team is experienced in resolving them efficiently.",
  },
];

function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleCard = (id) => {
    if (selectedCard === id) {
      setSelectedCard(null); // Deselect the card
    } else {
      setSelectedCard(id); // Select the card
    }
  };

  return (
    <div className="card-container">
      {CardData.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedCard === card.id ? "active" : ""}`}
          onClick={() => toggleCard(card.id)}
        >
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          {selectedCard === card.id && (
            <div className="full-content">
              <p>{card.fullContent}</p>
            </div>
          )}
          <span className="arrow">→</span>
        </div>
      ))}
    </div>
  );
}

export default Cards;
