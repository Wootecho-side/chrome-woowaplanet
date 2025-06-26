import styled from "@emotion/styled";

export const Container = styled.div<{
  size: number;
  color?: string;
  zIndex?: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${({ color = "#fff" }) => color};
  z-index: ${({ zIndex = 0 }) => zIndex};
`;
