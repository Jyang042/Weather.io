import {
    getMatchingCities,
    getCurrentWeather,
    getFiveDayForecast,
  } from "./WeatherAPI";
  
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && country) {
      onSearch(city, country);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
