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
  iconSize: number;
  isSelected: boolean;
  isDarkMode?: boolean;
}

export const ItemBox = styled(motion.div)<ItemBoxProps>`
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
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

interface PaginationContainer {
  iconSize: number;
  rowLength: number;
}

export const PaginationContainer = styled.div<PaginationContainer>`
  width: ${({ rowLength }) => rowLength}px;
  height: ${({ iconSize }) => iconSize}px;
  overflow: hidden;
`;

export const RowContainer = styled(motion.div)<{ startX: number }>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 5px;
  transform: translateX(-${({ startX }) => startX}px);
`;

export const ItemRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
