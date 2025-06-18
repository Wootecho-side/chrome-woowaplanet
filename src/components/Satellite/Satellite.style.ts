import styled from '@emotion/styled';

export const Container = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const BodyImage = styled.img`
  width: 100%;
  height: 100%;
`;
