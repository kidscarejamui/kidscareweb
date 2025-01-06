import React, { useState, useEffect, useCallback } from "react";
import "./ImageSlider.css";
import TextOverlay from "./TextOverlay";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["images/kids1.jpg", "images/kids2.jpg", "images/kids4.jpg"];

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);
    return () => clearInterval(intervalId);
  }, [goToNext]);

  return (
    <>
      <div className="slider-container">
        <TextOverlay />
        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
