import React, { useState } from 'react';
import './RemarkImageGalery.css'

const RemarkImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = [
    'https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg',
    'https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg',
    'https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg',
    'https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg'
    // Add URLs for your other images here
  ];

  return (
    <>
      <div className="sec1-imgwraper">
        <img
          src={images[selectedImageIndex]}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="indicator-container">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`indicator ${index === selectedImageIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RemarkImageGallery;
