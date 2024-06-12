// weatherService.js

// Function to fetch weather data from hardcoded examples
const fetchHardcodedWeatherData = async () => {
    return Promise.resolve([
      { location: 'New York', temperature: 25, condition: 'Sunny', low: 18, high: 27 },
      { location: 'London', temperature: 18, condition: 'Cloudy', low: 15, high: 20 },
      { location: 'Moscow', temperature: -5, condition: 'Snow', low: -10, high: -3 },
      // Add more hardcoded examples here...
      {
        current: {
          location: 'Duisburg, DE',
          temperature: 6,
          condition: 'Cloudy',
          low: 5,
          high: 8,
          humidity: 90,
          windSpeed: 14.83
        },
        hourly: [
          { time: '4:00', temperature: 7 },
          { time: '7:00', temperature: 6 },
          { time: '10:00', temperature: 6 },
          { time: '13:00', temperature: 8 },
          { time: '16:00', temperature: 7 },
          { time: '19:00', temperature: 6 }
        ],
        daily: [
          { day: 'Today', temperature: '6°C - 8°C', condition: 'Cloudy' },
          { day: 'Monday', temperature: '3°C - 5°C', condition: 'Cloudy' },
          { day: 'Tuesday', temperature: '1°C - 5°C', condition: 'Cloudy' }
        ]
      },
    ]);
  };
  
  // Function to fetch weather data from API
  const fetchWeatherDataFromAPI = () => {
    // Implement logic to fetch weather data from API
    // For example:
    // return fetch('api/weather').then(response => response.json());
    // Replace 'api/weather' with the actual API endpoint
  };
  
  // Function to fetch weather data
  export const fetchWeatherData = () => {
    // Use hardcoded data for now, but you can switch to API data later
    return fetchHardcodedWeatherData();
  };
  