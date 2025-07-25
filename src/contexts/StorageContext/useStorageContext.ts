import { createContext, useContext } from "react";
import type { Satellite } from "../../components/Inventory/InventoryTypes";
import type { Bookmark } from "../../components/Bookmark/BookmarkTypes";

interface StorageContext {
  token: number;
  addToken: (value: number) => void;
  spendToken: (value: number) => void;
  satelliteList: Satellite[];
  addSatelliteIdList: (id: number) => void;
  selectedSatelliteId: number;
  handleSelectedSatelliteId: (id: number) => void;
  bookmarkList: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmarkById: (id: number) => void;
  isBookmarkOpen: boolean;
  toggleBookmarkOpen: () => void;
  isInitialized: boolean;
}

export const StorageContext = createContext<StorageContext | null>(null);

export const useStorageContext = () => {
  const context = useContext(StorageContext);
  if (!context)
    throw new Error("useStorageContext는 StorageProvider로 감싸져야 합니다.");
  return context;
};
