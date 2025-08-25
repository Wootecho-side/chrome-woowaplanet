import { AnimatePresence } from "motion/react";
import * as S from "./Bookmark.styles";
import type { Bookmark } from "./BookmarkTypes";
import IconButton from "../IconButton/IconButton";
import BookmarkButton from "../IconButton/BookmarkButton/BookmarkButton";
import { useStorageContext } from "../../contexts/StorageContext/useStorageContext";
import { useRef, useState } from "react";
import BookmarkModal from "../Modal/BookmarkModal";
import AddButton from "../IconButton/AddButton/AddButton";
import useDeleteTooltip from "../../hooks/useDeleteTooltip";

export default function Bookmark({
  bookmarkList,
  isDarkMode,
}: {
  bookmarkList: Bookmark[];
  isDarkMode?: boolean;
}) {
  const { isBookmarkOpen, toggleBookmarkOpen } = useStorageContext();
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const {
    handleContextMenu,
    handleDelete,
    handleCancel,
    checkIsShowDeleteTooltip,
  } = useDeleteTooltip(tooltipRef);

  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false);

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
              <S.IconWrapper
                key={bookmark.id}
                onContextMenu={(e) => handleContextMenu(e, bookmark.id)}
              >
                <a href={bookmark.url}>
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
                </a>
                <S.Tooltip isDarkMode={isDarkMode}>{bookmark.title}</S.Tooltip>

                {checkIsShowDeleteTooltip(bookmark.id) && (
                  <S.DeleteTooltip ref={tooltipRef} isDarkMode={isDarkMode}>
                    <p>삭제하시겠습니까?</p>
                    <button onClick={() => handleDelete(bookmark.id)}>
                      삭제
                    </button>
                    <button onClick={handleCancel}>취소</button>
                  </S.DeleteTooltip>
                )}
              </S.IconWrapper>
            ))}
            {bookmarkList.length < 6 && (
              <AddButton
                size={40}
                isClicked={isBookmarkOpen}
                onClick={() => setBookmarkModalOpen(true)}
                isDarkMode={isDarkMode}
              />
            )}
            <BookmarkModal
              isOpen={bookmarkModalOpen}
              onClose={() => setBookmarkModalOpen(false)}
            />
          </S.ItemsWrapper>
        )}
      </AnimatePresence>
    </S.BookmarkWrapper>
  );
}
