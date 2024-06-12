// src/components/DetailedWeatherCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
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

const DetailedWeatherCard = ({ location, temperature, condition, low, high, humidity, windSpeed }) => {
  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <CardContent>
        <Typography variant="h3">{location}</Typography>
        <Typography variant="h1">{temperature}°C</Typography>
        <Typography variant="h5">{getWeatherIcon(condition)} {condition}</Typography>
        <Typography variant="body1">Low: {low}°C | High: {high}°C</Typography>
        <Typography variant="body1">Humidity: {humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {windSpeed} km/h</Typography>
      </CardContent>
    </Card>
  );
};

export default DetailedWeatherCard;
