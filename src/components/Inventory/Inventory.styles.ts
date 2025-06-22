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
}

export const ItemBox = styled(motion.div)<ItemBoxProps>`
  font-size: 40px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: rgba(0, 0, 0, 0.1);
  `}
`;
