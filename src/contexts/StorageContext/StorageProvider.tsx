import { useEffect, useState } from "react";
import { SatelliteData } from "../../data/SatelliteData";
import { StorageContext } from "./useStorageContext";
import type { Satellite } from "../../components/Inventory/InventoryTypes";

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<number>(0);
  const [satelliteIdList, setSatelliteIdList] = useState<number[]>([1]);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number>(1);

  useEffect(() => {
    setToken(2200);
    setSatelliteIdList([1]);
    setSelectedSatelliteId(1);
  }, []);

  const addToken = (value: number) => setToken((prev) => prev + value);

  const spendToken = (value: number) =>
    setToken((prev) => Math.max(0, prev - value));

  const addSatelliteIdList = (id: number) => {
    setSatelliteIdList((prev) => [...prev, id]);
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
        setSelectedSatelliteId,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
