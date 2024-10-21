import React, { useState } from 'react';
import './Carrusel.css'; 


import imagen1 from './../../../../assets/Images/img1.jpg';
import imagen2 from './../../../../assets/Images/img2.jpg';
import imagen3 from './../../../../assets/Images/img3.png';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const images = [imagen1, imagen2, imagen3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrusel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slide">
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>

      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
