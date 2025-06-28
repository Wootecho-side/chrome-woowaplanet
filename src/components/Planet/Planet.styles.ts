import styled from "@emotion/styled";
import { motion } from "motion/react";
import { Z_INDEX } from "../../constants/zIndex";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlanetCore = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  transform-origin: center;
  z-index: ${Z_INDEX.PLANETCORE};
`;

export const ClickableOverlay = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  z-index: ${Z_INDEX.CLICKABLE_OVERLAY};
  /* 디버깅용
  cursor: pointer;
  background-color: rgba(255, 0, 0, 0.1); */

  :focus-visible {
    outline: none;
  }
`;

export const EyeLayer = styled.div`
  position: absolute;
  top: 55%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.EYELAYER};
`;

export const BodyLayer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.BODY_LAYER};
`;

export const UpLayer = styled.div`
  position: absolute;
  top: 30%;
  left: 52%;
  transform: translateX(-50%);
  z-index: ${Z_INDEX.UP_LAYER};
`;

export const DownLayer = styled.div`
  position: absolute;
  top: 45%;
  left: 52%;
  transform: translateX(-50%);
  z-index: ${Z_INDEX.DOWN_LAYER};
`;
