import type { Satellite } from "../components/Inventory/InventoryTypes";
import { getRandomInteger } from "./getRandom";
import { getRank } from "./getRank";

const getNewSatellite = (
  satelliteList: Satellite[],
  rareChance: number,
  seed?: number
): Satellite => {
  const rank = getRank(rareChance, seed);

  const targetSatelliteList = satelliteList.filter(
    (satellite) => satellite.rank === rank
  );
  return targetSatelliteList[
    getRandomInteger(0, targetSatelliteList.length - 1)
  ];
};

export default getNewSatellite;
