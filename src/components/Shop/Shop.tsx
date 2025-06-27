import DiceButton from "../IconButton/DiceButton/DiceButton";
import * as S from "./Shop.styles";

interface ShopProps {
  token: number;
  isDarkMode?: boolean;
}

export default function Shop({ token, isDarkMode = false }: ShopProps) {
  return (
    <S.ShopWrapper>
      <S.Token isDarkMode={isDarkMode}>{token}</S.Token>
      <DiceButton size={40} isDarkMode={isDarkMode} />
    </S.ShopWrapper>
  );
}
