import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import { INIT_VALUE } from "../constants/config";
import {
  BOOKMARK_LIST_KEY,
  IS_BOOKMARK_OPEN_KEY,
  SATELLITE_ID_LIST_KEY,
  SELECTED_SATELLITE_ID_KEY,
  TOKEN_STORAGE_KEY,
} from "../constants/storage";
import type { Bookmark } from "../components/Bookmark/BookmarkTypes";

export default function useInitStorage() {
  const { getStorageValue, setStorageValue, initStorageValue } = useStorage();

  const [token, setToken] = useState<number>(INIT_VALUE.TOKEN);
  const [satelliteIdList, setSatelliteIdList] = useState<number[]>(
    INIT_VALUE.SATELLITE_ID_LIST
  );
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number>(
    INIT_VALUE.SELECTED_SATELLITE_ID
  );
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initStorageValue<number>(TOKEN_STORAGE_KEY, INIT_VALUE.TOKEN);
    initStorageValue<number[]>(
      SATELLITE_ID_LIST_KEY,
      INIT_VALUE.SATELLITE_ID_LIST
    );
    initStorageValue<number>(
      SELECTED_SATELLITE_ID_KEY,
      INIT_VALUE.SELECTED_SATELLITE_ID
    );
    initStorageValue<boolean>(BOOKMARK_LIST_KEY, INIT_VALUE.BOOKMARK_LIST);
    initStorageValue<boolean>(IS_BOOKMARK_OPEN_KEY, false);

    setToken(getStorageValue<number>(TOKEN_STORAGE_KEY) ?? INIT_VALUE.TOKEN);
    setSatelliteIdList(
      getStorageValue<number[]>(SATELLITE_ID_LIST_KEY) ??
        INIT_VALUE.SATELLITE_ID_LIST
    );
    setSelectedSatelliteId(
      getStorageValue<number>(SELECTED_SATELLITE_ID_KEY) ??
        INIT_VALUE.SELECTED_SATELLITE_ID
    );
    setBookmarkList(
      getStorageValue<Bookmark[]>(BOOKMARK_LIST_KEY) ?? INIT_VALUE.BOOKMARK_LIST
    );
    setIsBookmarkOpen(getStorageValue<boolean>(IS_BOOKMARK_OPEN_KEY) ?? false);

    setIsInitialized(true);
  }, [getStorageValue, initStorageValue]);

  return {
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
  };
}
