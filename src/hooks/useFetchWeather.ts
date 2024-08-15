// hooks/useFetchWeather.ts
import { useState } from 'react';
import { fetchWeather } from '../utils/fetchWeather';

export const useFetchWeather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async (city: string) => {
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

  return { weather, loading, error, getWeather };
};
