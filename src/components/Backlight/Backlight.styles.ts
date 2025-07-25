import styled from "@emotion/styled";

export const Container = styled.div<{
  size: number;
  color?: string;
  zIndex?: number;
}>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-image: radial-gradient(
    circle,
    ${({ color = "#fff" }) => color} 10%,
    transparent 70%
  );
  z-index: ${({ zIndex = 0 }) => zIndex};
`;
