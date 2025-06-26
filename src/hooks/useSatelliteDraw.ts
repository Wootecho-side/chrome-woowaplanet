import { DRAW_PRICE, RARE_CHANCE } from "../constants/config";
import { useStorageContext } from "../contexts/StorageContext/useStorageContext";
import { SatelliteData } from "../data/SatelliteData";
import getNewSatellite from "../utils/getNewSatellite";

const SPECIAL_SATELLITE_ID = 15;

const useSatelliteDraw = () => {
  const { token, spendToken, satelliteList, addSatelliteIdList } =
    useStorageContext();

  const satelliteIdSet = new Set(satelliteList.map(({ id }) => id));

  const canDraw =
    token >= DRAW_PRICE && satelliteIdSet.size < SatelliteData.length;

  const handleDrawButton = () => {
    spendToken(DRAW_PRICE);
    console.log("hello");

    if (
      satelliteIdSet.size === SatelliteData.length - 1 &&
      !satelliteIdSet.has(SPECIAL_SATELLITE_ID)
    ) {
      addSatelliteIdList(SPECIAL_SATELLITE_ID);
      return;
    }

    let newSatellite;
    while (true) {
      newSatellite = getNewSatellite(SatelliteData, RARE_CHANCE);
      if (satelliteIdSet.has(newSatellite.id)) continue;
      break;
    }
    addSatelliteIdList(newSatellite.id);
  };

  return { canDraw, handleDrawButton };
};

export default useSatelliteDraw;
