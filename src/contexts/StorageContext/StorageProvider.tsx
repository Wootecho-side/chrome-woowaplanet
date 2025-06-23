import { useEffect, useState } from "react";
import { SatelliteData } from "../../data/SatelliteData";
import { StorageContext } from "./useStorageContext";

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<number>(0);
  const [satelliteIdList, setSatelliteIdList] = useState<number[]>([1]);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number>(1);

  useEffect(() => {
    setToken(500);
    setSatelliteIdList([1]);
    setSelectedSatelliteId(1);
  }, []);

  const addToken = (value: number) => setToken((prev) => prev + value);

  const removeToken = (value: number) =>
    setToken((prev) => Math.max(0, prev - value));

  const addSatelliteIdList = (id: number) => {
    setSatelliteIdList((prev) => [...prev, id]);
  };

  return (
    <StorageContext.Provider
      value={{
        token,
        addToken,
        removeToken,
        satelliteList: SatelliteData.filter(({ id }) =>
          satelliteIdList.includes(id)
        ),
        addSatelliteIdList,
        selectedSatelliteId,
        setSelectedSatelliteId,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
