import type { Rank } from "../components/Inventory/InventoryTypes";
import { getRandom } from "./getRandom";

export const getRank = (rareChance: number, seed?: number): Rank => {
  const randomNumber = getRandom(seed);
  return randomNumber < rareChance ? "rare" : "normal";
};
