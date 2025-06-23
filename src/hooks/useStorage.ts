import { useCallback } from "react";
import LocalStorage from "../utils/LocalStorage";

const useStorage = () => {
  const getStorageValue = useCallback(
    <T>(key: string) => LocalStorage.getJSON<T>(key),
    []
  );
  const setStorageValue = useCallback(
    (key: string, data: unknown) => LocalStorage.setJSON(key, data),
    []
  );
  const initStorageValue = useCallback(
    <T>(key: string, initData: unknown) => {
      if (!getStorageValue<T>(key)) setStorageValue(key, initData);
    },
    [getStorageValue, setStorageValue]
  );

  return { getStorageValue, setStorageValue, initStorageValue };
};

export default useStorage;
