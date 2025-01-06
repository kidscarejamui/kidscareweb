import React from "react";
import { Link } from "react-router-dom";
import "./OurProgram.css";

const OurProgram = () => {
  return (
    <div className="our-program-container">
      <h1 className="our-program-heading">Our Program</h1>
      <p className="program-description">
        We believe in creating a nurturing environment where children can learn,
        grow, and develop essential life skills.
      </p>
      <hr />

      <div className="programs-list">
        <div className="program-card program-early-learning">
          <h2 className="program-title">Early Learning</h2>
          <p className="program-content">
            Our Early Learning program focuses on cognitive development,
            language skills, and emotional intelligence through play-based
            learning.
          </p>
          <Link to="/" className="learn-more-link">
            Learn More
          </Link>
        </div>

        <div className="program-card program-art-creativity">
          <h2 className="program-title">Art & Creativity</h2>
          <p className="program-content">
            In our Art & Creativity program, children explore different forms of
            art, including painting, sculpture, and music, encouraging
            self-expression.
          </p>
          <Link to="/" className="learn-more-link">
            Learn More
          </Link>
        </div>

        <div className="program-card program-physical-development">
          <h2 className="program-title">Physical Development</h2>
          <p className="program-content">
            Our Physical Development program promotes motor skills,
            coordination, and physical health through fun activities like games
            and outdoor play.
          </p>
          <Link to="/" className="learn-more-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
