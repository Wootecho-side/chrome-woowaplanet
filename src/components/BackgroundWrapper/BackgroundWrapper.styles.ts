import styled from "@emotion/styled";
import { motion } from "motion/react";
export const Wrapper = styled(motion.div)<{ background: string }>`
  background-color: ${({ background }) => background};
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;
