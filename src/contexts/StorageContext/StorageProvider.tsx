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

  return (
    <StorageContext.Provider
      value={{
        token,
        satelliteList: SatelliteData.filter(({ id }) =>
          satelliteIdList.includes(id)
        ),
        selectedSatelliteId,
        setSelectedSatelliteId,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
