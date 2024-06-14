// src/App.js
import React from 'react';
import { Container, css } from '@mui/material';
import WeatherAppContainer from './components/WeatherAppContainer';
import './App.css';
import WeatherContainer from './components/WeatherContainer';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';

const App = () => {
  return (
    <div className="backdrop-sunny">
      <div>
        <Header />
        <WeatherCard />
      </div>
    </div>
  );
};

export default App;
