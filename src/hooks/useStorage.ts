import LocalStorage from "../utils/LocalStorage";

const useStorage = () => {
  const getStorageValue = <T>(key: string) => LocalStorage.getJSON<T>(key);
  const setStorageValue = (key: string, data: unknown) =>
    LocalStorage.setJSON(key, data);
  const initStorageValue = (key: string, initData: unknown) => {
    if (!getStorageValue(key)) setStorageValue(key, initData);
  };

  return { getStorageValue, setStorageValue, initStorageValue };
};

export default useStorage;
