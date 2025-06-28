import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InventoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemsWrapper = styled(motion.div)`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  max-width: 100%;
`;
interface ItemBoxProps {
  isSelected: boolean;
  isDarkMode?: boolean;
}

export const ItemBox = styled(motion.div)<ItemBoxProps>`
  font-size: 30px;
  padding: 10px 8px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  ${({ isSelected, isDarkMode = false }) =>
    isSelected &&
    `
    background-color: ${
      isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
    };
  `}

  &:hover {
    background-color: ${({ isSelected, isDarkMode = false }) => {
      if (isSelected) return undefined;
      return isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
    }};
  }
`;
