import React from "react";
import "./TextOverlay.css";

const TextOverlay = () => {
  return (
    <div className="text-overlay">
      <h1>
        <span className="word1">We </span>
        <span className="word2">Mainly </span>
        <span className="word3">Focus </span>
        <span className="word4">On</span>
        <span className="word8">The</span>
        <span className="word5">Development </span>
        <span className="word6">Of </span>
        <span className="word7">Children </span>!
      </h1>
      <a href="/learn-more" className="learn-more-btn">
        Learn More
      </a>
    </div>
  );
};

export default TextOverlay;
