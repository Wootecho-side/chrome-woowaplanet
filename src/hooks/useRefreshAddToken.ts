import { useEffect, useRef } from "react";
import { getRandomInteger } from "../utils/getRandom";
import { FREE_TOKEN_RANGE } from "../constants/config";
import { useStorageContext } from "../contexts/StorageContext/useStorageContext";

const useRefreshAddToken = () => {
  const hasAddedToken = useRef(false);
  const { isInitialized, addToken } = useStorageContext();

  useEffect(() => {
    if (isInitialized && !hasAddedToken.current) {
      addToken(getRandomInteger(FREE_TOKEN_RANGE.MIN, FREE_TOKEN_RANGE.MAX));
      hasAddedToken.current = true;
    }
  }, [isInitialized, addToken]);
};

export default useRefreshAddToken;
