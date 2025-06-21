import type { TargetAndTransition } from "motion";
import { useAnimation } from "motion/react";

const shakeAnimations: TargetAndTransition[] = [
  // 좌우로 빠르게 흔들림
  {
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5, repeat: 0 },
  },
  // 좌우로 크게 흔들림
  {
    rotate: [0, 15, -15, 15, 0],
    transition: { duration: 0.6, repeat: 0 },
  },
  // 좌우로 흔들림
  {
    x: [0, -5, 5, -5, 0],
    transition: { duration: 0.4, repeat: 0 },
  },
  // 한바퀴 회전
  {
    rotate: [0, 360],
    transition: { duration: 0.8, ease: "easeInOut", repeat: 0 },
  },

  {
    y: [0, -10, 0, 10, 0],
    transition: { duration: 2, ease: "easeInOut", repeat: 0 },
  },
];

const useShakeAnimation = () => {
  const shakeControls = useAnimation();

  const setNextRandomShakeAnimation = () => {
    const nextAnimation =
      shakeAnimations[Math.floor(Math.random() * shakeAnimations.length)];
    shakeControls.start(nextAnimation);
  };

  return { shakeControls, setNextRandomShakeAnimation };
};

export default useShakeAnimation;
