import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Container = styled(motion.div)<{
  size: number;
  isClicked: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: transform 0.2s;
`;
