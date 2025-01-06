import React from "react";
import "./AboutContact.css";

const AboutContact = () => {
  return (
    <div className="about-contact-container">
      <div className="card about-card">
        <div className="founder-section">
          <img
            className="founder-image"
            src="images/founderImage.png"
            alt="Founder"
          />
          <h2 className="founder-name">Abadh Bihari</h2>{" "}
          <p className="founder-message">
            Our mission is to provide a safe and joyful environment where every
            child can grow and learn.
          </p>
        </div>
      </div>

      <div className="card contact-card">
        <div className="school-contact-section">
          <img
            className="school-image"
            src="images/contact-image.jpg"
            alt="School"
          />
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong> (+91)- 9334861323
            </p>{" "}
            <p>
              <strong>Email:</strong> askkidscare@gmail.com
            </p>{" "}
            <p>
              <strong>Address:</strong> Kids Care School, Shastri colony,
              Station road, Jamui 811307
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
