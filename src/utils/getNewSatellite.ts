import type { Rank, Satellite } from "../components/Inventory/InventoryTypes";
import { getRandom, getRandomInteger } from "./getRandom";

const getRank = (rareChance: number, seed?: number): Rank => {
  const randomNumber = getRandom(seed);
  return randomNumber < rareChance ? "rare" : "normal";
};

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
