import { CITIES } from "../data/cities";

const useCity = (id: number) => {
  return CITIES.find((city) => city.id === id);
};

export default useCity;
