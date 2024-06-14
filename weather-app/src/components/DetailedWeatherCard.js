// src/components/DetailedWeatherCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const DetailedWeatherCard = ({ day, onBack }) => {
  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <CardContent>
        <button onClick={onBack}>Back</button>
        <Typography variant="h3">{day.day}</Typography>
        
        <Typography variant="h5">{day.condition}</Typography>
        
        <Typography variant="body1">Humidity: {day.details.main.humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {day.details.wind.speed} km/h</Typography>
      </CardContent>
    </Card>
  );
};

export default DetailedWeatherCard;
