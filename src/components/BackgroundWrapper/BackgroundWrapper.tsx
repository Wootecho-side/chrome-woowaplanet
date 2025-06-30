import { useLayoutEffect, useState } from "react";
import * as S from "./BackgroundWrapper.styles";
import { BACKGROUND_COLOR } from "../../constants/config";

export default function BackgroundWrapper({
  children,
  isDarkMode = false,
}: {
  children: React.ReactNode;
  isDarkMode?: boolean;
}) {
  const [background, setBackground] = useState<string>("ffffff");

  const colorList = isDarkMode ? BACKGROUND_COLOR.DARK : BACKGROUND_COLOR.LIGHT;
  useLayoutEffect(() => {
    const random = colorList[Math.floor(Math.random() * colorList.length)];
    setBackground(random);
  }, [isDarkMode]); // 다크모드 변경 감지 시마다 배경색 변경

  return (
    <S.Wrapper animate={{ opacity: [0, 1] }} background={background}>
      {children}
    </S.Wrapper>
  );
}
