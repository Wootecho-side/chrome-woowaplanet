import { StorageContext } from "./useStorageContext";
import { SatelliteData } from "../../data/SatelliteData";
import type { Satellite } from "../../components/Inventory/InventoryTypes";
import useInitStorage from "../../hooks/useInitStorage";
import {
  BOOKMARK_LIST_KEY,
  IS_BOOKMARK_OPEN_KEY,
  SATELLITE_ID_LIST_KEY,
  SELECTED_SATELLITE_ID_KEY,
  TOKEN_STORAGE_KEY,
} from "../../constants/storage";
import type { Bookmark } from "../../components/Bookmark/BookmarkTypes";

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    token,
    setToken,
    satelliteIdList,
    setSatelliteIdList,
    selectedSatelliteId,
    setSelectedSatelliteId,
    bookmarkList,
    setBookmarkList,
    isBookmarkOpen,
    setIsBookmarkOpen,
    setStorageValue,
    isInitialized,
  } = useInitStorage();

  const addToken = (value: number) => {
    const newToken = token + value;
    setToken(newToken);
    setStorageValue(TOKEN_STORAGE_KEY, newToken);
  };

  const spendToken = (value: number) => {
    const newToken = Math.max(0, token - value);
    setToken(newToken);
    setStorageValue(TOKEN_STORAGE_KEY, newToken);
  };

  const addSatelliteIdList = (id: number) => {
    const newSatelliteList = [...satelliteIdList, id];
    setSatelliteIdList(newSatelliteList);
    setStorageValue(SATELLITE_ID_LIST_KEY, newSatelliteList);
  };

  const handleSelectedSatelliteId = (id: number) => {
    setSelectedSatelliteId(id);
    setStorageValue(SELECTED_SATELLITE_ID_KEY, id);
  };

  const addBookmark = (bookmark: Bookmark) => {
    const newBookmarkList = [...bookmarkList, bookmark];
    setBookmarkList(newBookmarkList);
    setStorageValue(BOOKMARK_LIST_KEY, newBookmarkList);
  };

  const removeBookmarkById = (id: number) => {
    const newBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarkList(newBookmarkList);
    setStorageValue(BOOKMARK_LIST_KEY, newBookmarkList);
  };

  const toggleBookmarkOpen = () => {
    setIsBookmarkOpen((prev) => !prev);
    setStorageValue(IS_BOOKMARK_OPEN_KEY, !isBookmarkOpen);
  };

  return (
    <StorageContext.Provider
      value={{
        token,
        addToken,
        spendToken,
        satelliteList: satelliteIdList
          .map((id) => SatelliteData.find((s) => s.id === id))
          .filter((s): s is Satellite => s !== undefined),
        addSatelliteIdList,
        selectedSatelliteId,
        handleSelectedSatelliteId,
        bookmarkList,
        addBookmark,
        removeBookmarkById,
        isBookmarkOpen,
        toggleBookmarkOpen,
        isInitialized,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
