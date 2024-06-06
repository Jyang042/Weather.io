// src/App.js
import React from 'react';
import WeatherCarousel from './components/WeatherCarousel';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <h1>Weather App</h1>
      <WeatherCarousel />
    </Container>
  );
};

export default App;
