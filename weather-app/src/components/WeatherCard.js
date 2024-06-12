// src/components/WeatherCard.js
import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';

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

const WeatherCard = ({ location, temperature, condition, low, high, detailedView, onMoreInfoClick }) => {
  const handleMoreInfoClick = () => {
    //Call and Pass the Cards info to the detailed view
    onMoreInfoClick({ location, temperature, condition, low, high});
  };

  return (
    <Card style={{ minWidth: 275, margin: '10px', marginBottom: detailedView ? '50px' : '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {location}
        </Typography>
        <Typography variant={detailedView ? "h2" : "h3"} component="div">
          {temperature}°C
        </Typography>
        <Typography variant={detailedView ? "h4" : "h6"} component="div">
          {getWeatherIcon(condition)} {condition}
        </Typography>
        <Typography color="textSecondary">
          Low: {low}°C | High: {high}°C
        </Typography>
      </CardContent>
      {!detailedView && (
        <CardActions>
          <Button size="small" onMoreInfoClick={handleMoreInfoClick}>More Info</Button>
        </CardActions>
      )}
    </Card>
  );
};

export default WeatherCard;
