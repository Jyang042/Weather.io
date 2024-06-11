// src/App.js
import React from 'react';
import WeatherCarousel from './components/WeatherCarousel';
import { Container } from '@mui/material';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  return (
    <Container>
      <h1>Weather App</h1>
      <WeatherContainer />
      
    </Container>
  );
};

export default App;
