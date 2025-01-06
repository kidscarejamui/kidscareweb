import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <h1 className="cta-title">
        {["K", "I", "D", "S", " ", "C", "A", "R", "E"].map((letter, index) => (
          <span key={index} className={`cta-letter letter-${index}`}>
            {letter}
          </span>
        ))}
      </h1>
      <hr />
      <p className="cta-paragraph">
        At our school, we believe every child deserves a nurturing environment
        that sparks curiosity, fosters creativity, and encourages learning.
        Explore how we make a difference in the lives of young learners!
      </p>
    </div>
  );
};

export default CTA;
