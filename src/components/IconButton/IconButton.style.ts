import styled from '@emotion/styled';
import { motion } from 'motion/react';

export const Button = styled(motion.button)<{ size: number; name: string; disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  border-radius: 30%;
  background-color: transparent;
  background-image: ${({ name }) => `url(/button/${name}.svg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 0.5)};
`;
