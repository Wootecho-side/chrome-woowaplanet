import { useState } from "react";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";

export default function Planet() {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setmousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <S.Wrapper onMouseMove={handleMouseMove}>
      <S.UpLayer>
        <UpRing />
      </S.UpLayer>
      <S.BodyLayer>
        <PlanetBody mousePosition={mousePosition} />
      </S.BodyLayer>
      <S.DownLayer>
        <DownRing />
      </S.DownLayer>
    </S.Wrapper>
  );
}
