import styled from "@emotion/styled";
import { motion } from "motion/react";

export const OuterContainer = styled.div<{
  size: number;
  showRecognitionZone: boolean;
}>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ showRecognitionZone }) =>
    showRecognitionZone && "1px solid black"};
`;

export const InnerRecognitionZone = styled.div<{
  size: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid black;
  border-radius: 50%;
`;

export const MovingContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AnimationContent = styled(motion.div)``;
