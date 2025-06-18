import * as S from "./InventoryButton.style";
import { useState } from "react";
import IconButton from "../IconButton";
import type { ButtonProps } from "../ButtonTypes";

const InventoryButton = ({ size }: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <S.Container size={size} isClicked={isClicked}>
      <IconButton
        size={size}
        name="inventory"
        whileHover={{ opacity: 0.8 }}
        onClick={handleClick}
      />
    </S.Container>
  );
};

export default InventoryButton;
