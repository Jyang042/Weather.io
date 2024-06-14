// src/components/WeatherCard.js
import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DetailedWeatherCard from './DetailedWeatherCard';
import '../assets/styling/WeatherCard.css';

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Sunny':
      return <WbSunnyIcon />;
    case 'Cloudy':
      return <CloudIcon />;
    case 'Snow':
      return <AcUnitIcon />;
    default:
      return <WbSunnyIcon />;
  }
};

const WeatherCard = ({ day, high, low, condition, onClick }) => {
  const handleMoreInfoClick = () => {
    //Call and Pass the Cards info to the detailed view
    onClick({ day, high, low, condition});
  };

  return (
    <div className="card">
    
      <CardContent>
        <Typography variant="h4" component="div">
          {day}
        </Typography>
        <Typography variant={DetailedWeatherCard ? "h4" : "h6"} component="div">
          {getWeatherIcon(condition)} {condition}
        </Typography>
        <Typography color="textSecondary">
          Low: {low}°F | High: {high}°F
        </Typography>
      </CardContent>
      {!DetailedWeatherCard && (
        <CardActions>
          <Button size="small" onMoreInfoClick={handleMoreInfoClick}>More Info</Button>
        </CardActions>
      )}
    
    </div>
  );
};

export default WeatherCard;
