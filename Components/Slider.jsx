"use client"
import styles from './Slider.module.css'
import React, { useState, useEffect } from 'react';
import image1 from '../Images/bamk.jpg';
import image2 from '../Images/coat.jpg';
import image3 from '../Images/momo.jpg';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { backgroundImage: `url(${image1})`, alt: 'Image 1' },
    { backgroundImage: `url(${image2})`, alt: 'Image 2' },
    { backgroundImage: `url(${image3})`, alt: 'Image 3' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderSlides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === slideIndex ? styles.active : ''}`}
            style={{
              backgroundImage: slide.backgroundImage[0],
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div className={styles.sliderControls}>
        <button className={styles.prevButton} onClick={() => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
          Previous
        </button>
        <button className={styles.nextButton} onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;