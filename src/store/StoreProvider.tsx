import React, { useEffect, useState } from "react";
import useCitySelectionStore from "./citySelection";
import localforage from "localforage";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrateStores = async () => {
      try {
        const citySelectionState = await localforage.getItem(
          "city-selection-storage",
        );

        if (!citySelectionState) {
          const { selection } = useCitySelectionStore.getState();
          if (selection.length === 0) {
            useCitySelectionStore.getState().addCity(1);
            useCitySelectionStore.getState().addCity(2);
          }
        }

        setIsHydrated(true);
      } catch (error) {
        console.error("Error hydrating stores:", error);
        setIsHydrated(true);
      }
    };

    hydrateStores();
  }, []);

  if (!isHydrated) {
    return null;
  }

  return <>{children}</>;
};

export default StoreProvider;
