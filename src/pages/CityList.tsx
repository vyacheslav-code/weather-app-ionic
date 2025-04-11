// src/pages/CityList.tsx
import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./CityList.css";
import {
  CityHeader,
  SearchBar,
  CitySearchResults,
  SelectedCitiesList,
} from "../components/CityList";

const CityList: React.FC = () => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <IonPage className="city-list-page">
      <CityHeader />
      <IonContent>
        <SearchBar setIsSearching={setIsSearching} onSearch={handleSearch} />
        {isSearching ? (
          <CitySearchResults
            query={query}
            setQuery={setQuery}
            setIsSearching={setIsSearching}
          />
        ) : (
          <SelectedCitiesList />
        )}
      </IonContent>
    </IonPage>
  );
};

export default CityList;
