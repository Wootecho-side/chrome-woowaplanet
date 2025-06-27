import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BookmarkWrapper = styled.div`
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
