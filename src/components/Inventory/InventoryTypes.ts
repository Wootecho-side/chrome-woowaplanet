export type Rank = "normal" | "rare" | "special";

export interface Satellite {
  id: number;
  name: string;
  rank: Rank;
  icon: string;
}

export interface InventoryProps {
  inventory: Satellite[];
  selected: number | null;
  setSelected: (index: number) => void;
  isDarkMode?: boolean;
}
