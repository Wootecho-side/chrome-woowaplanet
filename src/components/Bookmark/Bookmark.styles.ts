import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

export const Tooltip = styled.span<{ isDarkMode?: boolean }>`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  background: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#e3e3e3")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#e3e3e3" : "#333")};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 10;
`;

export const DeleteTooltip = styled.div<{ isDarkMode?: boolean }>`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ isDarkMode }) => (isDarkMode ? "#442222" : "#fff5f5")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffb3b3" : "#cc0000")};
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 20;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  gap: 8px;

  & > button {
    font-family: inherit;
    color: ${({ isDarkMode }) => (isDarkMode ? "#e3e3e3" : "#333")};
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ isDarkMode }) => (isDarkMode ? "#663333" : "#ffe5e5")};
    }
  }
`;

export const ItemsWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 100%;
  position: absolute;
  left: 80px;
`;
interface ItemBoxProps {
  isDarkMode?: boolean;
}

export const ItemBox = styled(motion.div)<ItemBoxProps>`
  text-align: center;
  font-size: 35px;
  padding: 10px 8px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  ${({ isDarkMode = false }) =>
    `
    background-color: ${
      isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
    };
  `}

  &:hover {
    background-color: ${({ isDarkMode = false }) => {
      return isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
    }};
  }
`;
