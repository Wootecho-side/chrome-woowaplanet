import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const UpLayer = styled.div`
  position: absolute;
  top: 170px;
  left: -70px;
  z-index: 1;
`;

export const DownLayer = styled.div`
  position: absolute;
  top: 205px;
  left: -70px;
  z-index: 3;
`;

export const BodyLayer = styled.div`
  position: absolute;
  top: 100px;
  left: -70px;
  z-index: 2;
`;
