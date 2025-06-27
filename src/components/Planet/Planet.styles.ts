import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlanetCore = styled(motion.div)`
  position: relative;
  width: 120px;
  height: 120px;
  transform-origin: center;
  z-index: 10;
`;

export const ClickableOverlay = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 125%;
  height: 125%;
  border-radius: 50%;
  z-index: 14;
  /* 디버깅용
  cursor: pointer;
  background-color: rgba(255, 0, 0, 0.1); */
`;

export const EyeLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 13;
`;

export const BodyLayer = styled(motion.div)`
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 12;
`;

export const UpLayer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
`;

export const DownLayer = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 13;
`;
