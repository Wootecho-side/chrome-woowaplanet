import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";

export default function Planet() {
  return (
    <S.Wrapper>
      <S.UpLayer>
        <UpRing />
      </S.UpLayer>
      <S.BodyLayer>
        <PlanetBody />
      </S.BodyLayer>
      <S.DownLayer>
        <DownRing />
      </S.DownLayer>
    </S.Wrapper>
  );
}
