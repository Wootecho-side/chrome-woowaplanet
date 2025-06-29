import { AnimatePresence } from "motion/react";
import * as S from "./Bookmark.styles";
import type { Bookmark } from "./BookmarkTypes";
import IconButton from "../IconButton/IconButton";
import BookmarkButton from "../IconButton/BookmarkButton/BookmarkButton";
import { useStorageContext } from "../../contexts/StorageContext/useStorageContext";

export default function Bookmark({
  bookmarkList,
  isDarkMode,
}: {
  bookmarkList: Bookmark[];
  isDarkMode?: boolean;
}) {
  const { isBookmarkOpen, toggleBookmarkOpen } = useStorageContext();

  return (
    <S.BookmarkWrapper>
      <BookmarkButton
        size={40}
        isClicked={isBookmarkOpen}
        onClick={toggleBookmarkOpen}
        isDarkMode={isDarkMode}
      />
      <AnimatePresence>
        {isBookmarkOpen && (
          <S.ItemsWrapper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {bookmarkList.map((bookmark) => (
              <IconButton
                size={40}
                name={bookmark.name}
                key={bookmark.name}
                isDarkMode={isDarkMode}
                whileHover={{ opacity: 0.8 }}
                onClick={() => {
                  window.location.href = bookmark.url;
                }}
              />
            ))}
          </S.ItemsWrapper>
        )}
      </AnimatePresence>
    </S.BookmarkWrapper>
  );
}
