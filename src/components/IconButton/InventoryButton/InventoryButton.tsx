import * as S from "./InventoryButton.styles";
import IconButton from "../IconButton";
import type { ButtonProps } from "../ButtonTypes";

const InventoryButton = ({
  size,
  isClicked,
  onClick,
  isDarkMode,
}: ButtonProps & { isClicked: boolean }) => {
  return (
    <S.Container size={size} isClicked={isClicked}>
      <IconButton
        size={size}
        name="inventory"
        whileHover={{ opacity: 0.8 }}
        onClick={onClick}
        isDarkMode={isDarkMode}
      />
    </S.Container>
  );
};

export default InventoryButton;
