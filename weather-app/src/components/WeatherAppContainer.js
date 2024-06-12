// src/components/WeatherAppContainer.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import DetailedWeatherCard from './DetailedWeatherCard';
import HourlyForecast from './HourlyForecast';
import DailyForecastCard from './DailyForecastCard';
import { fetchWeatherData } from './WeatherService';
import WeatherCarousel from './WeatherCarousel';

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
    <div>
      <Header />
      <DetailedWeatherCard />
      <WeatherCarousel />
    </div>
  );
};

export default WeatherAppContainer;
