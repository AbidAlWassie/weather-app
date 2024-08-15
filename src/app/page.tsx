"use client";

// pages/index.js
import { useState } from 'react';
import { fetchWeather } from '../utils/fetchWeather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      setError('Unable to fetch weather data.');
    }

    setLoading(false);
  };

  const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(2);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />

      <button
        onClick={handleFetchWeather}
        style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
      >
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>Weather in {weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {kelvinToCelsius(weather.main.temp)}°C</p>
          <p>Feels Like: {kelvinToCelsius(weather.main.feels_like)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Cloudiness: {weather.clouds.all}%</p>
        </div>
      )}
    </div>
  );
}
