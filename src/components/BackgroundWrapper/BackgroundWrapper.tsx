import { useEffect, useState } from "react";
import * as S from "./BackgroundWrapper.styles";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = useState<string>("ffffff");

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const colorList = isDarkMode
      ? ["#001427", "#000B14", "#0B1D3A", "#1A2B4C", "#14213D"]
      : ["#A9B5DF", "#D6E5FA", "#BFD7ED", "#E3F2FD", "#D0E8FF"];
    const random = colorList[Math.floor(Math.random() * colorList.length)];

    setBackground(random);
  }, []);

  return <S.Wrapper background={background}>{children}</S.Wrapper>;
}
