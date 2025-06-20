import styled from "@emotion/styled";
export const Wrapper = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
