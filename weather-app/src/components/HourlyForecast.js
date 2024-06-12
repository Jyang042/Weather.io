// src/components/HourlyForecast.js
import React from 'react';
import { Grid, Typography } from '@mui/material';

const HourlyForecast = ({ forecast }) => {
  return (
    <Grid container spacing={2} style={{ margin: '20px 0' }}>
      {forecast.map((hour, index) => (
        <Grid item key={index} xs>
          <Typography variant="body1">{hour.time}</Typography>
          <Typography variant="body2">{hour.temperature}°C</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default HourlyForecast;
