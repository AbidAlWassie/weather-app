// utils/fetchWeather.js
import axios, { AxiosResponse } from 'axios';
import { ReactNode } from "react";

export interface WeatherData {
  wind: any;
  main: any;
  weather: any;
  name: ReactNode;
  // Define the structure of the weather data object
  // Add more properties as needed
  temperature: number;
  humidity: number;
  // ...
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data as WeatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data");
  }
};
