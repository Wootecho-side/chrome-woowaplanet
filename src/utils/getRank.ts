import { getRandom } from "./getRandom";

export const getRank = (rareChance: number, seed?: number) => {
  const randomNumber = getRandom(seed);
  return randomNumber < rareChance ? "rare" : "normal";
};
