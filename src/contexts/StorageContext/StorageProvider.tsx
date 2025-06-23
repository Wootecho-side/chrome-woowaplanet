import { StorageContext } from "./useStorageContext";
import { SatelliteData } from "../../data/SatelliteData";
import type { Satellite } from "../../components/Inventory/InventoryTypes";
import useInitStorage from "../../hooks/useInitStorage";
import {
  SATELLITE_ID_LIST_KEY,
  SELECTED_SATELLITE_ID_KEY,
  TOKEN_STORAGE_KEY,
} from "../../constants/storage";

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    token,
    setToken,
    satelliteIdList,
    setSatelliteIdList,
    selectedSatelliteId,
    setSelectedSatelliteId,
    setStorageValue,
    isInitialized,
  } = useInitStorage();

  const addToken = (value: number) => {
    const newToken = token + value;
    setToken(newToken);
    setStorageValue(TOKEN_STORAGE_KEY, newToken);
  };

  const spendToken = (value: number) => {
    const newToken = Math.max(0, token - value);
    setToken(newToken);
    setStorageValue(TOKEN_STORAGE_KEY, newToken);
  };

  const addSatelliteIdList = (id: number) => {
    const newList = [...satelliteIdList, id];
    setSatelliteIdList(newList);
    setStorageValue(SATELLITE_ID_LIST_KEY, newList);
  };

  const handleSelectedSatelliteId = (id: number) => {
    setSelectedSatelliteId(id);
    setStorageValue(SELECTED_SATELLITE_ID_KEY, id);
  };

  return (
    <StorageContext.Provider
      value={{
        token,
        addToken,
        spendToken,
        satelliteList: satelliteIdList
          .map((id) => SatelliteData.find((s) => s.id === id))
          .filter((s): s is Satellite => s !== undefined),
        addSatelliteIdList,
        selectedSatelliteId,
        handleSelectedSatelliteId,
        isInitialized,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
