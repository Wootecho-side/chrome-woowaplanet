import { useLayoutEffect, useState } from "react";
import useShakeAnimation from "../../hooks/useShakeAnimation";
import { planetColorThemes } from "../../styles/planetColorThemes";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";
import Backlight from "../Backlight/Backlight";
import EyeMoving from "../EyeMoving/EyeMoving";
import PlanetEyes from "../PlanetEyes/PlanetEyes";

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

  useLayoutEffect(() => {
    const getRandomColor = () => {
      return planetColorThemes[
        Math.floor(Math.random() * planetColorThemes.length)
      ];
    };
    setColors(getRandomColor());
  }, []);

  return (
    <S.Wrapper>
      <S.PlanetCore animate={shakeControls}>
        <S.EyeLayer>
          <EyeMoving
            size={500}
            innerSafeSize={200}
            maxMovingValue={5}
            showRecognitionZone={true}
          >
            <PlanetEyes
              center={{ x: 150, y: 150 }}
              eyeColor={colors.eyeColor}
            />
          </EyeMoving>
        </S.EyeLayer>
        <S.UpLayer>
          <UpRing color={colors.ringColor} isDarkMode={isDarkMode} />
        </S.UpLayer>
        <S.BodyLayer onTap={setNextRandomShakeAnimation}>
          <PlanetBody
            bodyColor={colors.bodyColor}
            eyeColor={colors.eyeColor}
            isDarkMode={isDarkMode}
          />
        </S.BodyLayer>
        <S.DownLayer>
          <DownRing color={colors.ringColor} isDarkMode={isDarkMode} />
        </S.DownLayer>
        <Backlight
          size={180}
          style={{
            top: "45%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            opacity: 0.6,
          }}
        />
      </S.PlanetCore>
    </S.Wrapper>
  );
}
