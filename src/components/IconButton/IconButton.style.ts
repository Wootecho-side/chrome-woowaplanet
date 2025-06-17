import styled from '@emotion/styled';
import { motion } from 'motion/react';

export const Button = styled(motion.button)<{ size: number; name: string }>`
  cursor: pointer;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  border-radius: 30%;
  background-color: transparent;
  background-image: ${({ name }) => `url(/button/${name}.svg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: opacity(0.5);
`;
