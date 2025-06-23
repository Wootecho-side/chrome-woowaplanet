import { useStorageContext } from "../contexts/StorageContext/useStorageContext";
import { SatelliteData } from "../data/SatelliteData";
import getNewSatellite from "../utils/getNewSatellite";

const DRAW_PRICE = 200;
const RARE_CHANCE = 0.05;

const useSatelliteDraw = () => {
  const { token, removeToken, satelliteList, addSatelliteIdList } =
    useStorageContext();

  const satelliteIdSet = new Set(satelliteList.map(({ id }) => id));

  const canDraw = token >= DRAW_PRICE;

  const handleDrawButton = () => {
    removeToken(DRAW_PRICE);

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
