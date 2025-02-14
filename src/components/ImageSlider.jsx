import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    '/event1.png', 
    '/event2.png',
    '/event3.png',
    '/event1.png', 
    '/event2.png', 
    '/event3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of images
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  // Function to go to the previous set of images
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  // Slice the images array to show the current set of 3 images
  const currentImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="image-container">
        {currentImages.map((image, index) => (
          <img key={index} src={image} alt={`Slider ${index}`} />
        ))}
      </div>
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
