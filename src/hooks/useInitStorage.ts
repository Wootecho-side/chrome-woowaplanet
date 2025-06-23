import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import { INIT_VALUE } from "../constants/config";
import {
  SATELLITE_ID_LIST_KEY,
  SELECTED_SATELLITE_ID_KEY,
  TOKEN_STORAGE_KEY,
} from "../constants/storage";

export default function useInitStorage() {
  const { getStorageValue, setStorageValue, initStorageValue } = useStorage();

  const [token, setToken] = useState<number>(INIT_VALUE.TOKEN);
  const [satelliteIdList, setSatelliteIdList] = useState<number[]>(
    INIT_VALUE.SATELLITE_ID_LIST
  );
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number>(
    INIT_VALUE.SELECTED_SATELLITE_ID
  );

  useEffect(() => {
    initStorageValue<number>(TOKEN_STORAGE_KEY, INIT_VALUE.TOKEN);
    initStorageValue<number[]>(
      SATELLITE_ID_LIST_KEY,
      INIT_VALUE.SATELLITE_ID_LIST
    );
    initStorageValue<number>(
      SELECTED_SATELLITE_ID_KEY,
      INIT_VALUE.SELECTED_SATELLITE_ID
    );

    setToken(getStorageValue<number>(TOKEN_STORAGE_KEY) ?? INIT_VALUE.TOKEN);
    setSatelliteIdList(
      getStorageValue<number[]>(SATELLITE_ID_LIST_KEY) ??
        INIT_VALUE.SATELLITE_ID_LIST
    );
    setSelectedSatelliteId(
      getStorageValue<number>(SELECTED_SATELLITE_ID_KEY) ??
        INIT_VALUE.SELECTED_SATELLITE_ID
    );
  }, [getStorageValue, initStorageValue]);

  return {
    token,
    setToken,
    satelliteIdList,
    setSatelliteIdList,
    selectedSatelliteId,
    setSelectedSatelliteId,
    setStorageValue,
  };
}
