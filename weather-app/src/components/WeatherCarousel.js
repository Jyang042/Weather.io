// src/components/WeatherCarousel.js
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const weatherData = [
  { location: 'New York', temperature: 25, condition: 'Sunny', low: 18, high: 27 },
  { location: 'London', temperature: 18, condition: 'Cloudy', low: 15, high: 20 },
  { location: 'Moscow', temperature: -5, condition: 'Snow', low: -10, high: -3 },
  // Add more weather data here...
];

const WeatherCarousel = () => {
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
        <WeatherCard key={index} {...weather} />
      ))}
    </Slider>
  );
};

export default WeatherCarousel;
