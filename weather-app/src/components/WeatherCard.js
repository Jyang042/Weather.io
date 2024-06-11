// src/components/WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useStyles from '../assets/styles'; // Correct import path

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

const WeatherCard = ({ location, temperature, condition, low, high }) => {
  const classes = useStyles();

  return (
    <Card style={{ minWidth: 275, margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {location}
        </Typography>
        <Typography variant="h3" component="div">
          {temperature}°C
        </Typography>
        <Typography variant="h6" component="div">
          {getWeatherIcon(condition)} {condition}
        </Typography>
        <Typography color="textSecondary">
          Low: {low}°C | High: {high}°C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
