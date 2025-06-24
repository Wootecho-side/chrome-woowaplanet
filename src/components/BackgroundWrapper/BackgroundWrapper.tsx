import { useLayoutEffect, useState } from "react";
import * as S from "./BackgroundWrapper.styles";

export default function BackgroundWrapper({
  children,
  isDarkMode = false,
}: {
  children: React.ReactNode;
  isDarkMode?: boolean;
}) {
  const [background, setBackground] = useState<string>("ffffff");

  const colorList = isDarkMode
    ? ["#001427", "#000B14", "#0B1D3A", "#1A2B4C", "#14213D"]
    : ["#A9B5DF", "#D6E5FA", "#BFD7ED", "#E3F2FD", "#D0E8FF"];
  useLayoutEffect(() => {
    const random = colorList[Math.floor(Math.random() * colorList.length)];
    setBackground(random);
  }, [isDarkMode]); // 다크모드 변경 감지 시마다 배경색 변경

  return <S.Wrapper background={background}>{children}</S.Wrapper>;
}
