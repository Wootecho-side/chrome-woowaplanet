import styled from "@emotion/styled";

export const StyledRing = styled.svg<{ ringColor: string }>`
  color: ${(props) => props.ringColor};
`;
