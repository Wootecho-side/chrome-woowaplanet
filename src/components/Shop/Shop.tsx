import DiceButton from "../IconButton/DiceButton/DiceButton";
import * as S from "./Shop.styles";

interface ShopProps {
  token: number;
  isDarkMode?: boolean;
  isClosed?: boolean;
}

export default function Shop({
  token,
  isDarkMode = false,
  isClosed = false,
}: ShopProps) {
  return (
    <S.ShopWrapper>
      <S.Token isDarkMode={isDarkMode}>
        {isClosed ? "😎 모든 행성이를 모으셨습니다! 감사합니다. 😎" : token}
      </S.Token>
      <DiceButton size={40} isDarkMode={isDarkMode} />
    </S.ShopWrapper>
  );
}
