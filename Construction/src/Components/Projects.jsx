import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusLgub__Ko5ngxKpinvIv8tp6fkkEai4UQ&s",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt venenatis. Integer malesuada, magna sit amet malesuada lacinia, felis purus tempor quam, nec gravida nunc ipsum sed libero. Aenean sit amet consequat erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt venenatis. Integer malesuada, magna sit amet malesuada lacinia, felis purus tempor quam, nec gravida nunc ipsum sed libero. Aenean sit amet consequat erat.",
    },
    {
      image:
        "https://www.ilearnengineering.com/wp-content/uploads/2023/07/Minimizing-Disruption-to-Construction-Projects.jpg",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Mnmh1tSmaWgwC6yeHcadJZYcR9sLT6UvzQ&s",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image:
        "https://www.michaelpage.com/sites/michaelpage.com/files/legacy/Top%25206%2520Construction%2520Project%2520Challenges.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleViewMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div className="slider-arrow right-arrow">&#9654;</div>,
    prevArrow: <div className="slider-arrow left-arrow">&#9664;</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="cards">
      <div className="heading">
        <h1>Our Latest Completed Projects</h1>
      </div>
      <Slider {...sliderSettings}>
        {projects.map((d, index) => (
          <div key={index} className="project-card">
            <div
              className={`project-image ${
                expandedCard === index && d.description.length > 75
                  ? "hide-imag"
                  : ""
              }`}
            >
              <img src={d.image} alt={d.title} />
            </div>
            <div className="project-info">
              <h2>{d.title}</h2>
              <p className={expandedCard === index ? "expanded" : ""}>
                {expandedCard === index
                  ? d.description
                  : d.description.substring(0, 50) + "..."}
              </p>
              <button
                className="view-more"
                onClick={() => toggleViewMore(index)}
              >
                {expandedCard === index ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
