// src/components/WeatherAppContainer.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import DetailedWeatherCard from './DetailedWeatherCard';
import { fetchWeatherData } from './WeatherService';
import WeatherCarousel from './WeatherCarousel';
import { Container } from '@mui/material';

const WeatherAppContainer = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeatherData().then(data => {
      setWeatherData(data);
    });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { current, hourly, daily } = weatherData;

  return (
    <Container>
      
    </Container>
  );
};

export default WeatherAppContainer;
