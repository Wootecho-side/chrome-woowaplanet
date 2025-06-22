export interface Satellite {
  id: number;
  name: string;
  rank: "normal" | "rare";
  icon: string;
}

export interface InventoryProps {
  inventory: Satellite[];
  selected: number | null;
  setSelected: (index: number) => void;
}
