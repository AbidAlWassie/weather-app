// components/WeatherDisplay.tsx
"use client";

interface WeatherDisplayProps {
  weather: {
    coord: { lon: number; lat: number };
    weather: Array<{ id: number; main: string; description: string; icon: string }>;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    clouds: {
      all: number;
    };
    sys: {
      country: string;
    };
    name: string;
    timezone: number;
  };
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const kelvinToCelsius = (kelvin: number) => (kelvin - 273.15).toFixed(2);

  if (!weather) {
    return <p>No weather data available</p>;
  }

  const { main, weather: weatherArray, wind, clouds, sys, name } = weather;
  const weatherCondition = weatherArray[0] || {};

  return (
    <div>
      <h2>
        Weather in {name}, {sys.country}
      </h2>
      <p>Temperature: {kelvinToCelsius(main.temp)}°C</p>
      <p>Feels Like: {kelvinToCelsius(main.feels_like)}°C</p>
      <p>Weather: {weatherCondition.description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Cloudiness: {clouds.all}%</p>
    </div>
  );
}
