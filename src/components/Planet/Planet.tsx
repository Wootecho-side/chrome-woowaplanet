import { useState } from "react";
import DownRing from "../DownRing/DownRing";
import PlanetBody from "../PlanetBody/PlanetBody";
import UpRing from "../UpRing/UpRing";
import * as S from "./Planet.styles";
import type { TargetAndTransition } from "motion";

const shakeAnimations: TargetAndTransition[] = [
  // 좌우로 빠르게 흔들림
  {
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 },
  },
  // 좌우로 크게 흔들림
  {
    rotate: [0, 15, -15, 15, 0],
    transition: { duration: 0.6 },
  },
  // 좌우로 흔들림
  {
    x: [0, -5, 5, -5, 0],
    transition: { duration: 0.4 },
  },
  // 한바퀴 회전
  {
    rotate: [0, 360],
    transition: { duration: 0.8, ease: "easeInOut" },
  },

  {
    y: [0, -10, 0, 10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
];

export default function Planet() {
  const [animation, setAnimation] = useState(
    shakeAnimations[Math.floor(Math.random() * shakeAnimations.length)]
  );

  return (
    <S.Wrapper
      whileTap={animation}
      onTap={() => {
        const nextAnimation =
          shakeAnimations[Math.floor(Math.random() * shakeAnimations.length)];
        setAnimation(nextAnimation);
      }}
    >
      <S.PlanetCore>
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
