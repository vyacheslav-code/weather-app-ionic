import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./persist";

interface CitySelectionStore {
  selection: number[];
  addCity: (id: number) => void;
  removeCity: (id: number) => void;
}

const useCitySelectionStore = create<CitySelectionStore>()(
  persist(
    (set, get) => ({
      selection: [],
      addCity: (id) => {
        const currentState = get();
        if (!currentState.selection.includes(id)) {
          set({
            selection: [...currentState.selection, id],
          });
        }
      },
      removeCity: (id) => {
        const currentState = get();
        set({
          selection: currentState.selection.filter((cityId) => cityId !== id),
        });
      },
    }),
    {
      name: "city-selection-storage",
      storage: persistStorage,
    }
  )
);

export default useCitySelectionStore;
