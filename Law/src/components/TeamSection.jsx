// TeamSection.js
import { useState } from "react";
import Slider from "react-slick";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "P. Keith Staubus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Ryan A. Randall",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Julie K Blankenship",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Diane F. Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Joseph E. Legere",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "P. Keith Staubus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Ryan A. Randall",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Julie K Blankenship",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Diane F. Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Joseph E. Legere",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Julie K Blankenship",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Diane F. Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Joseph E. Legere",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "P. Keith Staubus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Ryan A. Randall",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Julie K Blankenship",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Diane F. Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  {
    name: "Joseph E. Legere",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRea6ViR13qq_XZmmRBUCItu41WpmruOmFw&s",
  },
  // Add more team members if necessary
];

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 members at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 members on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 members on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 members on extra small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleCloseModal = () => {
    setShowAll(false);
  };

  return (
    <div className="team-section">
      <h2 className="team-heading">
        Meet the Team
        <span className="team-line"></span>
      </h2>

      {!showAll ? (
        <Slider {...settings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="all-members">
          <button className="close-btn" onClick={handleCloseModal}>
            Close
          </button>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-grid">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image-grid"
                />
                <p className="member-name-grid">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="view-all-button" onClick={handleViewAll}>
        VIEW ALL ATTORNEY
      </button>
    </div>
  );
};

export default TeamSection;
