import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2>About Us</h2>
          <p>
            At our playschool, we believe in nurturing creativity and learning
            in a fun and engaging environment. Our experienced teachers focus on
            each child’s individual development, ensuring that every day is full
            of new experiences and discoveries.
          </p>
          <a href="/" className="learn-more-link">
            Learn More
          </a>
        </div>
        <div className="image-content">
          <img
            src="images/AboutSection.jpg"
            alt="Playschool"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
