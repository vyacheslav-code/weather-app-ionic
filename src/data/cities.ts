export interface CityWeather {
  id: number;
  name: string;
  temperature: number;
  state: "sun" | "cloud" | "rain" | "snow";
  windSpeed: number; // in km/h
  windDirection: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
  humidity: number; // percentage
  uvIndex: number; // 0-11 scale
  pressure: number; // in hPa
  feelsLike: number; // temperature in Celsius
  visibility: number; // in km
}

export const CITIES: CityWeather[] = [
  { 
    id: 1, 
    name: "New York", 
    temperature: 10, 
    state: "sun",
    windSpeed: 15,
    windDirection: "NW",
    humidity: 45,
    uvIndex: 3,
    pressure: 1012,
    feelsLike: 8,
    visibility: 10
  },
  { 
    id: 2, 
    name: "London", 
    temperature: 0, 
    state: "snow",
    windSpeed: 8,
    windDirection: "N",
    humidity: 85,
    uvIndex: 1,
    pressure: 998,
    feelsLike: -3,
    visibility: 2
  },
  { 
    id: 3, 
    name: "Tokyo", 
    temperature: 30, 
    state: "sun",
    windSpeed: 5,
    windDirection: "E",
    humidity: 30,
    uvIndex: 9,
    pressure: 1015,
    feelsLike: 32,
    visibility: 15
  },
  { 
    id: 4, 
    name: "Paris", 
    temperature: 2, 
    state: "rain",
    windSpeed: 12,
    windDirection: "SW",
    humidity: 88,
    uvIndex: 0,
    pressure: 1001,
    feelsLike: -1,
    visibility: 4
  },
  { 
    id: 5, 
    name: "Sydney", 
    temperature: 4, 
    state: "cloud",
    windSpeed: 18,
    windDirection: "SE",
    humidity: 65,
    uvIndex: 2,
    pressure: 1008,
    feelsLike: 2,
    visibility: 7
  },
  { 
    id: 6, 
    name: "Berlin", 
    temperature: 11, 
    state: "sun",
    windSpeed: 10,
    windDirection: "W",
    humidity: 50,
    uvIndex: 4,
    pressure: 1014,
    feelsLike: 9,
    visibility: 12
  },
  { 
    id: 7, 
    name: "Moscow", 
    temperature: 8, 
    state: "sun",
    windSpeed: 7,
    windDirection: "NE",
    humidity: 35,
    uvIndex: 3,
    pressure: 1020,
    feelsLike: 6,
    visibility: 15
  },
  { 
    id: 8, 
    name: "Dubai", 
    temperature: 7, 
    state: "sun",
    windSpeed: 4,
    windDirection: "S",
    humidity: 25,
    uvIndex: 11,
    pressure: 1010,
    feelsLike: 8,
    visibility: 20
  },
];
