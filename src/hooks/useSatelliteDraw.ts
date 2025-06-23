import { DRAW_PRICE, RARE_CHANCE } from "../constants/config";
import { useStorageContext } from "../contexts/StorageContext/useStorageContext";
import { SatelliteData } from "../data/SatelliteData";
import getNewSatellite from "../utils/getNewSatellite";

const useSatelliteDraw = () => {
  const { token, spendToken, satelliteList, addSatelliteIdList } =
    useStorageContext();

  const satelliteIdSet = new Set(satelliteList.map(({ id }) => id));

  const canDraw = token >= DRAW_PRICE;

  const handleDrawButton = () => {
    spendToken(DRAW_PRICE);
    console.log("hello");

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
