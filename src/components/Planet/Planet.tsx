import useShakeAnimation from "../../hooks/useShakeAnimation";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";

export default function Planet() {
  const { shakeControls, setNextRandomShakeAnimation } = useShakeAnimation();

  return (
    <S.Wrapper>
      <S.PlanetCore animate={shakeControls} onTap={setNextRandomShakeAnimation}>
        <S.UpLayer>
          <UpRing />
        </S.UpLayer>
        <S.BodyLayer>
          <PlanetBody />
        </S.BodyLayer>
        <S.DownLayer>
          <DownRing />
        </S.DownLayer>
      </S.PlanetCore>
    </S.Wrapper>
  );
}
