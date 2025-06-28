import useShakeAnimation from "../../hooks/useShakeAnimation";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";
import Backlight from "../Backlight/Backlight";
import EyeMoving from "../EyeMoving/EyeMoving";
import PlanetEyes from "../PlanetEyes/PlanetEyes";
import type { PlanetColors } from "./PlanetTypes";
import { Z_INDEX } from "../../constants/zIndex";

export default function Planet({
  isDarkMode = false,
  colors,
}: {
  isDarkMode?: boolean;
  colors: PlanetColors;
}) {
  const { shakeControls, setNextRandomShakeAnimation } = useShakeAnimation();

  return (
    <S.Wrapper>
      <S.PlanetCore animate={shakeControls}>
        <S.ClickableOverlay onTap={setNextRandomShakeAnimation} />
        <S.EyeLayer>
          <EyeMoving size={700} maxMovingValue={10}>
            <PlanetEyes
              center={{ x: 140, y: 130 }}
              eyeColor={colors.eyeColor}
            />
          </EyeMoving>
        </S.EyeLayer>
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
        <Backlight
          size={300}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.6,
          }}
          zIndex={Z_INDEX.BACKLIGHT}
        />
      </S.PlanetCore>
    </S.Wrapper>
  );
}
