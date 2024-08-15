// components/WeatherInput.tsx
"use client";

import WeatherDisplay from '@/components/utils/WeatherDisplay'; // Correct the import path
import { useFetchWeather } from '@/hooks/useFetchWeather';
import { useState } from 'react';

export default function WeatherInput() {
  const [city, setCity] = useState<string>('');
  const { weather, loading, error, getWeather } = useFetchWeather();

  const handleClick = () => {
    if (city) {
      getWeather(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={handleClick}
        style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
      >
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />} {/* Display WeatherDisplay */}
    </div>
  );
}
