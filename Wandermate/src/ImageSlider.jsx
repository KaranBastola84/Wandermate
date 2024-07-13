import React, { useEffect, useRef, useState } from 'react';
import bg3 from './assets/bg3.jpg';
import bg4 from './assets/bg4.jpg';
import bg5 from './assets/img4.jpg';

function ImageSlider() {
  const images = [bg3, bg4, bg5];
  const [slideIndex, setSlideIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const startSlider = () => {
    slideInterval.current = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
  };

  const stopSlider = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const showSlide = (index) => {
    if (index >= images.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const prevSlide = () => {
    stopSlider();
    showSlide(slideIndex - 1);
    startSlider();
  };

  const nextSlide = () => {
    stopSlider();
    showSlide(slideIndex + 1);
    startSlider();
  };

  return (
    <>    
      <div className="slider ">
        <div className="slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === slideIndex ? 'displaySlide' : ''}`}
              style={{ display: index === slideIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#8651;</button>
        <button className="next" onClick={nextSlide}>&#8652;</button>
      </div>
    </>
  );
}

export default ImageSlider;
