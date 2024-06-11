// WeatherContainer.js

import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Switch, TextField } from '@mui/material';
import WeatherCarousel from './WeatherCarousel';
import DetailedWeatherView from './DetailedWeatherView';
import useStyles from '../assets/styles';

const WeatherContainer = () => {
  const classes = useStyles();
  const [isCelsius, setIsCelsius] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleChange = (event) => {
    setIsCelsius(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.backdrop}>
        <Box className={classes.header}>
          <Typography variant="h4">Weather App</Typography>
        </Box>
        <Box className={classes.searchBar}>
          <TextField
            label="Search Location"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Box className={classes.switchLabel}>
            <Typography>°F</Typography>
            <Switch
              checked={isCelsius}
              onChange={handleToggleChange}
              color="primary"
            />
            <Typography>°C</Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DetailedWeatherView />
          </Grid>
          <Grid item xs={12}>
            <WeatherCarousel />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WeatherContainer;
