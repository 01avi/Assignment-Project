import { useState } from "react";
import "./ArchitectProfile.css";

const ArchitectProfiles = () => {
  const profiles = [
    {
      name: "Lanvin Moto",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "John Carten",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Ayush",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Chris",
      role: "Lead Architect",
      rating: 4,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Moto",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Adani",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Ratan",
      role: "Senior Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Chris Donovan",
      role: "Lead Architect",
      rating: 4,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Emily",
      role: "Junior Architect",
      rating: 4,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
    {
      name: "Mark",
      role: "Architect",
      rating: 5,
      img: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const profilesPerPage = 3;
  const [viewAll, setViewAll] = useState(false); // New state to toggle view

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + profilesPerPage < profiles.length
        ? prevIndex + profilesPerPage
        : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - profilesPerPage >= 0
        ? prevIndex - profilesPerPage
        : profiles.length - profilesPerPage
    );
  };

  return (
    <section className="architect-profiles">
      <h3>View Member Architect Profiles</h3>
      <div className="profiles-slider">
        {viewAll
          ? profiles.map((profile, index) => (
              <div key={index} className="profile active">
                <img src={profile.img} alt={`${profile.name}'s profile`} />
                <p>{profile.name}</p>
                <p>{profile.role}</p>
                <p>{"★".repeat(profile.rating)}</p>
              </div>
            ))
          : profiles
              .slice(currentIndex, currentIndex + profilesPerPage)
              .map((profile, index) => (
                <div key={index} className="profile active">
                  <img src={profile.img} alt={`${profile.name}'s profile`} />
                  <p>{profile.name}</p>
                  <p>{profile.role}</p>
                  <p>{"★".repeat(profile.rating)}</p>
                </div>
              ))}
      </div>
      <div className="slider-controls">
        {!viewAll && (
          <>
            <button onClick={prevSlide}>⬅️</button>
            <button onClick={nextSlide}>➡️</button>
          </>
        )}
      </div>
      <button onClick={() => setViewAll(!viewAll)} className="view-all-btn">
        {viewAll ? "View Less" : "View All Profiles"}
      </button>
    </section>
  );
};

export default ArchitectProfiles;
