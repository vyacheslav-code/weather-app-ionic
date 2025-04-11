import { CITIES } from "../data/cities";

export interface City {
  id: number;
  name: string;
  temperature: number;
}

const useCities = (query?: string) => {
  if (query)
    return CITIES.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase()),
    );
  return CITIES;
};

export default useCities;
