import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WeatherCarousel = ({ weatherData, onCardClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {weatherData.map((weather, index) => (
        <WeatherCard 
          key={index} 
          {...weather} 
          onClick={() => onCardClick(index)} // Pass index to handleCardClick
        />
      ))}
    </Slider>
  );
};

export default WeatherCarousel;
