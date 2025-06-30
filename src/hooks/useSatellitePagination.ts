import { useState } from "react";
import type { Satellite } from "../components/Inventory/InventoryTypes";

const useSatellitePagination = (
  inventory: Satellite[],
  amount: number,
  selected: number | null
) => {
  const separatedItems = inventory.reduce<Satellite[][]>((acc, item, index) => {
    const chunkIndex = Math.floor(index / amount);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);

  const currentPage = selected
    ? separatedItems.findIndex((separatedItem) =>
        new Set(separatedItem.map(({ id }) => id)).has(selected)
      )
    : 0;
  const [page, setPage] = useState(currentPage);

  const movePrevPage = () => {
    setPage((prev) => Math.max(0, prev - 1));
  };

  const moveNextPage = () => {
    setPage((prev) => Math.min(separatedItems.length - 1, prev + 1));
  };

  return { page, separatedItems, movePrevPage, moveNextPage };
};

export default useSatellitePagination;
