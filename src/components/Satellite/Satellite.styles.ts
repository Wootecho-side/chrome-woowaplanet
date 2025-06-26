import styled from "@emotion/styled";

export const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const BodyImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
