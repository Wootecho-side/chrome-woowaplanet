import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as S from "./Bookmark.styles";
import type { Bookmark } from "./BookmarkTypes";
import IconButton from "../IconButton/IconButton";
import BookmarkButton from "../IconButton/BookmarkButton/BookmarkButton";

export default function Bookmark({
  bookmarkList,
  isDarkMode,
}: {
  bookmarkList: Bookmark[];
  isDarkMode?: boolean;
}) {
  const [showItems, setShowItems] = useState(false);

  const toggleBookmark = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <S.BookmarkWrapper>
      <AnimatePresence>
        {showItems && (
          <S.ItemsWrapper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {bookmarkList.map((bookmark) => (
              <IconButton
                size={40}
                name={bookmark.name}
                key={bookmark.name}
                isDarkMode={isDarkMode}
                onClick={() => {
                  window.location.href = bookmark.url;
                }}
              />
            ))}
          </S.ItemsWrapper>
        )}
      </AnimatePresence>
      <BookmarkButton
        size={40}
        isClicked={showItems}
        onClick={toggleBookmark}
        isDarkMode={isDarkMode}
      />
    </S.BookmarkWrapper>
  );
}
