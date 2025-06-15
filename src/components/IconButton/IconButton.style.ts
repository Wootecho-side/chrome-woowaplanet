import styled from '@emotion/styled';

export const Button = styled.button<{ size: number }>`
  cursor: pointer;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid black;
`;
