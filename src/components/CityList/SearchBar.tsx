import React from "react";
import { IonSearchbar } from "@ionic/react";

interface SearchBarProps {
  setIsSearching: (isSearching: boolean) => void;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setIsSearching, onSearch }) => {
  const handleSearchBarInput = (e: Event) => {
    const target = e.target as HTMLIonSearchbarElement;
    onSearch(target.value || "");
  };

  const handleFocus = () => {
    setIsSearching(true);
  };

  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <IonSearchbar
      debounce={200}
      onIonInput={handleSearchBarInput}
      onClick={handleFocus}
      showCancelButton="focus"
      onIonBlur={handleBlur}
    />
  );
};

export default SearchBar;
