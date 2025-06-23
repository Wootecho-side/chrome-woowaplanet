import { useEffect, useState } from "react";
import { SatelliteData } from "../../data/SatelliteData";
import { StorageContext } from "./useStorageContext";
import type { Satellite } from "../../components/Inventory/InventoryTypes";
import useStorage from "../../hooks/useStorage";
import { INIT_VALUE } from "../../constants/config";

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<number>(0);
  const [satelliteIdList, setSatelliteIdList] = useState<number[]>([1]);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number>(1);

  const { getStorageValue, setStorageValue, initStorageValue } = useStorage();
  const TOKEN_STORAGE_KEY = "token";
  const SATELLITE_ID_LIST_KEY = "inventory";
  const SELECTED_SATELLITE_ID_KEY = "selected";

  useEffect(() => {
    initStorageValue<typeof token>(TOKEN_STORAGE_KEY, INIT_VALUE.TOKEN);
    setToken(
      getStorageValue<typeof token>(TOKEN_STORAGE_KEY) ?? INIT_VALUE.TOKEN
    );
  }, [getStorageValue, initStorageValue]);

  useEffect(() => {
    initStorageValue<typeof satelliteIdList>(
      SATELLITE_ID_LIST_KEY,
      INIT_VALUE.SATELLITE_ID_LIST
    );
    setSatelliteIdList(
      getStorageValue<typeof satelliteIdList>(SATELLITE_ID_LIST_KEY) ??
        INIT_VALUE.SATELLITE_ID_LIST
    );
  }, [getStorageValue, initStorageValue]);

  useEffect(() => {
    initStorageValue<typeof satelliteIdList>(
      SELECTED_SATELLITE_ID_KEY,
      INIT_VALUE.SELECTED_SATELLITE_ID
    );
    setSelectedSatelliteId(
      getStorageValue<typeof selectedSatelliteId>(SELECTED_SATELLITE_ID_KEY) ??
        INIT_VALUE.SELECTED_SATELLITE_ID
    );
  }, [getStorageValue, initStorageValue]);

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
    const newSatelliteIdList = [...satelliteIdList, id];
    setSatelliteIdList(newSatelliteIdList);
    setStorageValue(SATELLITE_ID_LIST_KEY, newSatelliteIdList);
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
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
