"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';


const images = [
    '/Images/school1.jpg',
    '/Images/school2.jpg',
    '/Images/school3.jpg',
    '/Images/school4.jpg',
    '/Images/school5.jpg',
    '/Images/school6.jpg'
  ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div  className={styles.slider}>
     
    
           <Box
        sx={{
          width: '100%',
          height: '400px', // Adjust height as needed
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      
      <div className={styles.buttonNext}>
        <ArrowForwardIosIcon onClick={nextSlide} sx={{fontSize:40}}/>
      </div>
        <div className={styles.buttonPrev}>
            <ArrowBackIosIcon onClick={prevSlide} sx={{fontSize:40}}/>
        </div>
    </div>
  );
};

export default Slider;
