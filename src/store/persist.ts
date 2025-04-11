import localforage from 'localforage';
import { StateStorage, createJSONStorage } from 'zustand/middleware';

// Configure localforage
localforage.config({
  name: 'theweather',
  storeName: 'app_data'
});

// Create a storage object using localforage
export const storageAdapter: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await localforage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await localforage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await localforage.removeItem(name);
  },
};

// Create JSON storage for use with Zustand persist middleware
export const persistStorage = createJSONStorage(() => storageAdapter);

// Helper function to initialize store with persisted data
export const hydrateStore = async <T>(store: (state: any) => T, key: string): Promise<T | undefined> => {
  try {
    const storedData = await localforage.getItem<T>(key);
    return storedData ? store(storedData) : undefined;
  } catch (error) {
    console.error(`Error hydrating store ${key}:`, error);
    return undefined;
  }
};