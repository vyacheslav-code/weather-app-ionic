import { CityWeather } from "../data/cities";
import { DisplayUnit } from "../store/settings";

const emojiMap: Record<CityWeather["state"], string> = {
  sun: "☀️",
  cloud: "☁️",
  rain: "🌧️",
  snow: "🌨️",
};

export const getEmojiByState = (state: CityWeather["state"]) => emojiMap[state];

export const convertCelsiusToFahrenheit = (celsius: number): number => {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

export const getUVIndexCategory = (uvIndex: number): string => {
  if (uvIndex <= 2) return "Low";
  if (uvIndex <= 5) return "Moderate";
  if (uvIndex <= 7) return "High";
  if (uvIndex <= 10) return "Very High";
  return "Extreme";
};

export const getWindDirectionText = (
  direction: CityWeather["windDirection"],
): string => {
  const directionMap: Record<CityWeather["windDirection"], string> = {
    N: "North",
    NE: "Northeast",
    E: "East",
    SE: "Southeast",
    S: "South",
    SW: "Southwest",
    W: "West",
    NW: "Northwest",
  };
  return directionMap[direction];
};

export const getTemperatureDisplayValue = (
  temperature: number,
  displayUnits: DisplayUnit,
) =>
  displayUnits === "celcius"
    ? temperature + " °C"
    : convertCelsiusToFahrenheit(temperature) + " °F";
