// src/components/DetailedWeatherView.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import useStyles from '../assets/styles'; // Correct import path

const DetailedWeatherView = () => {
  const classes = useStyles();

  const detailedWeather = {
    location: 'New York',
    temperature: 25,
    condition: 'Sunny',
    low: 18,
    high: 27,
    humidity: 65,
    windSpeed: 10,
  };

  return (
    <Card className={classes.detailedView}>
      <CardContent>
        <Typography variant="h5">Detailed View</Typography>
        <Typography variant="h6">{detailedWeather.location}</Typography>
        <Typography>Temperature: {detailedWeather.temperature}°C</Typography>
        <Typography>Condition: {detailedWeather.condition}</Typography>
        <Typography>Low: {detailedWeather.low}°C</Typography>
        <Typography>High: {detailedWeather.high}°C</Typography>
        <Typography>Humidity: {detailedWeather.humidity}%</Typography>
        <Typography>Wind Speed: {detailedWeather.windSpeed} km/h</Typography>
      </CardContent>
    </Card>
  );
};

export default DetailedWeatherView;
