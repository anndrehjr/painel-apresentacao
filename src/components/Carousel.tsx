'use client'

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Initialize Bootstrap carousel
    if (typeof window !== 'undefined') {
      // Import Bootstrap JS only on client side
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }

    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 1 ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? 'active' : ''}
          aria-current={activeIndex === 0}
          aria-label="Slide 1"
          onClick={() => handleSlideChange(0)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? 'active' : ''}
          aria-current={activeIndex === 1}
          aria-label="Slide 2"
          onClick={() => handleSlideChange(1)}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img className="d-block w-100" src="/images/Carousel1.png" alt="Primeiro Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primeiro Slide</h5>
            <p>Descrição do primeiro slide.</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img className="d-block w-100" src="/images/Carousel2.png" alt="Segundo Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo Slide</h5>
            <p>Descrição do segundo slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => handleSlideChange(activeIndex === 0 ? 1 : activeIndex - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => handleSlideChange(activeIndex === 1 ? 0 : activeIndex + 1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carousel;

