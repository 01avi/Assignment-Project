import { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // testimonial quotes
  const testimonials = [
    {
      quote:
        "I recently had the occasion to hire Mr. Staubus for a hotly contested Guardianship matter. Mr. Staubus brought a rare combination of effectiveness, reasonableness and understanding of the human element involved.",
      author: "Jody",
    },
    {
      quote:
        "Mr. Staubus handled all things in a calm, highly competent, effective, and reasonable way. It could not have been as easy as he made it seem. He's a credit to the Bar.",
      author: "Mark",
    },
    {
      quote:
        "Hiring Mr. Staubus was the best decision I made during my case. His experience and knowledge helped me resolve things smoothly.",
      author: "Sarah",
    },
    // add more testimonials here
  ];

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials">
      <h2>What They're Saying About Us</h2>

      {/* Show only one quote if not in "Show All" mode */}
      {!showAll ? (
        <div className="testimonial-carousel">
          <span className="arrow arrow-left" onClick={prevTestimonial}>
            &#8249;
          </span>
          <blockquote>
            <p>{testimonials[currentIndex].quote}</p>
            <cite>- {testimonials[currentIndex].author}</cite>
          </blockquote>
          <span className="arrow arrow-right" onClick={nextTestimonial}>
            &#8250;
          </span>
        </div>
      ) : (
        <div className="all-testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <blockquote>
                <p>{testimonial.quote}</p>
                <cite>- {testimonial.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button className="btn-testimonials" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Read All Testimonials"}
      </button>
    </section>
  );
}

export default Testimonials;
