import { createContext, useContext } from "react";
import type { Satellite } from "../../components/Inventory/InventoryTypes";

interface StorageContext {
  token: number;
  addToken: (value: number) => void;
  removeToken: (value: number) => void;
  satelliteList: Satellite[];
  addSatelliteIdList: (id: number) => void;
  selectedSatelliteId: number;
  setSelectedSatelliteId: React.Dispatch<React.SetStateAction<number>>;
}

export const StorageContext = createContext<StorageContext | null>(null);

export const useStorageContext = () => {
  const context = useContext(StorageContext);
  if (!context)
    throw new Error("useStorageContext는 StorageProvider로 감싸져야 합니다.");
  return context;
};
