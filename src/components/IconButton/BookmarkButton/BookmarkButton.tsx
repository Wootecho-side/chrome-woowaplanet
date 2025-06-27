import * as S from "./BookmarkButton.styles";
import IconButton from "../IconButton";
import type { ButtonProps } from "../ButtonTypes";

const BookmarkButton = ({
  size,
  isClicked,
  onClick,
  isDarkMode,
}: ButtonProps & { isClicked: boolean }) => {
  return (
    <S.Container size={size} isClicked={isClicked}>
      <IconButton
        size={size}
        name="bookmark"
        whileHover={{ opacity: 0.8 }}
        onClick={onClick}
        isDarkMode={isDarkMode}
      />
    </S.Container>
  );
};

export default BookmarkButton;
