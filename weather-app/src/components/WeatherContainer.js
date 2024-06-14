import React, { useState } from 'react';
import { getFiveDayForecast } from './WeatherAPI';
import SearchForm from './SearchForm';
import WeatherCarousel from './WeatherCarousel';
import DetailedWeatherView from './DetailedWeatherCard';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSearch = async (city, country) => {
    setLoading(true);
    try {
      const data = await getFiveDayForecast(city, country);
      const processedData = data.list.slice(0, 7).map((item, index) => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleString('en-US', { weekday: 'long' });
        return {
          day,
          high: item.main.temp_max,
          low: item.main.temp_min,
          condition: item.weather[0].description,
          details: item // Full item for detailed view
        };
      });
      setWeatherData(processedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setLoading(false);
    }
  };

  const handleCardClick = (index) => {
    setSelectedDay(weatherData[index]);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {selectedDay ? (
        <DetailedWeatherView day={selectedDay} onBack={() => setSelectedDay(null)} />
      ) : (
        <WeatherCarousel weatherData={weatherData} onCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default WeatherContainer;
