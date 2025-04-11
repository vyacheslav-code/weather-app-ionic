import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistStorage } from "./persist";

export type DisplayUnit = "celcius" | "fahrenheit";

export interface SettingsStore {
  displayUnits: DisplayUnit;
  setDisplayUnits: (unit: DisplayUnit) => void;
}

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      displayUnits: "celcius",
      setDisplayUnits: (displayUnits) => set({ displayUnits }),
    }),
    {
      name: "settings-storage",
      storage: persistStorage,
    },
  ),
);

export default useSettingsStore;
