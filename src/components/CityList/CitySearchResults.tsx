import React from "react";
import { IonList, IonItem } from "@ionic/react";
import useCities from "../../hooks/useCities";
import useCitySelectionStore from "../../store/citySelection";

interface CitySearchResultsProps {
  query: string;
  setQuery: (query: string) => void;
  setIsSearching: (isSearching: boolean) => void;
}

const CitySearchResults: React.FC<CitySearchResultsProps> = ({ 
  query, 
  setQuery, 
  setIsSearching 
}) => {
  const cities = useCities(query);
  const { addCity } = useCitySelectionStore();

  const handleCitySelect = (id: number) => {
    addCity(id);
    setIsSearching(false);
    setQuery("");
  };

  return (
    <IonList>
      {cities.map((city) => (
        <IonItem key={city.id} onClick={() => handleCitySelect(city.id)}>
          {city.name}
        </IonItem>
      ))}
    </IonList>
  );
};

export default CitySearchResults;
