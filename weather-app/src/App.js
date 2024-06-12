// src/App.js
import React from 'react';
import { Container, css } from '@mui/material';
import WeatherAppContainer from './components/WeatherAppContainer';
import './App.css';

const App = () => {
  return (
    <div className="backdrop-sunny">
      <Container>
        <WeatherAppContainer />
      </Container>
    </div>
  );
};

export default App;
