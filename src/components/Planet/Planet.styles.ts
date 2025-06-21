import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Wrapper = styled(motion.div)`
  width: 600px;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
`;

export const PlanetCore = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  transform-origin: center;
`;

export const BodyLayer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const UpLayer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const DownLayer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;
