import styled from '@emotion/styled';

export const Container = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid black;
`;
