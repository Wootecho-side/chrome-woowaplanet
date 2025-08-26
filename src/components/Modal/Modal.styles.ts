import styled from "@emotion/styled";
import { motion } from "motion/react";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Body = styled.div`
  margin-bottom: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CloseButtonStyled = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
