import { useEffect, useState } from "react";
import useShakeAnimation from "../../hooks/useShakeAnimation";
import { planetColorThemes } from "../../styles/planetColorThemes";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";

export default function Planet({
  isDarkMode = false,
}: {
  isDarkMode?: boolean;
}) {
  const { shakeControls, setNextRandomShakeAnimation } = useShakeAnimation();

  const [colors, setColors] = useState({
    name: "기본",
    bodyColor: "#ccc",
    ringColor: "#888",
    eyeColor: "#000",
  });

  useEffect(() => {
    const getRandomColor = () => {
      return planetColorThemes[
        Math.floor(Math.random() * planetColorThemes.length)
      ];
    };
    setColors(getRandomColor());
  }, []);

  return (
    <S.Wrapper>
      <S.PlanetCore animate={shakeControls} onTap={setNextRandomShakeAnimation}>
        <S.UpLayer>
          <UpRing color={colors.ringColor} isDarkMode={isDarkMode} />
        </S.UpLayer>
        <S.BodyLayer>
          <PlanetBody
            bodyColor={colors.bodyColor}
            eyeColor={colors.eyeColor}
            isDarkMode={isDarkMode}
          />
        </S.BodyLayer>
        <S.DownLayer>
          <DownRing color={colors.ringColor} isDarkMode={isDarkMode} />
        </S.DownLayer>
      </S.PlanetCore>
    </S.Wrapper>
  );
}
