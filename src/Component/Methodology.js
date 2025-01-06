import React from "react";
import "./Methodology.css";

const Methodology = () => {
  return (
    <div className="methodology-container">
      <h2 className="methodology-title">Our Methodology</h2>
      <p className="methodology-description">
        Kids being one of the Top Pre schools in Jamui provides the best
        preschool curriculum along with Montessori and other teaching aid
        materials.
      </p>
      <hr />
      <div className="methodology-wrapper">
        <div className="methodology-item red methodology-item-1">
          <span className="number">1</span>
          <h3>Engaged Learning</h3>
          <p className="methodology-values">
            This methodology fosters an interactive learning environment, where
            children engage directly with materials and experiences that connect
            to nature and the world around them.
          </p>
        </div>
        <div className="methodology-item blue methodology-item-2">
          <span className="number">2</span>
          <h3>Hands-on Activities</h3>
          <p className="methodology-values">
            Through hands-on activities, children experience learning by doing,
            tapping into their natural curiosity and imagination, which
            encourages creativity and exploration.
          </p>
        </div>
        <div className="methodology-item green methodology-item-3">
          <span className="number">3</span>
          <h3>Creative Play</h3>
          <p className="methodology-values">
            Creative play allows children to use their imagination, create their
            own narratives, and explore the natural world in a way that nurtures
            both creativity and problem-solving skills.
          </p>
        </div>
        <div className="methodology-item purple methodology-item-5">
          <span className="number">4</span>
          <h3>Collaborative Learning</h3>
          <p className="methodology-values">
            Collaborative learning encourages children to work together, share
            ideas, and explore creative solutions to problems, creating a
            nurturing environment where creativity thrives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
