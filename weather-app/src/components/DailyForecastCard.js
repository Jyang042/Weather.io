// src/components/DailyForecastCard.js
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

const DailyForecastCard = ({ day, temperature, condition }) => {
  return (
    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6">{day}</Typography>
        <Typography variant="h5">{getWeatherIcon(condition)} {temperature}°C</Typography>
      </CardContent>
    </Card>
  );
};

export default DailyForecastCard;
