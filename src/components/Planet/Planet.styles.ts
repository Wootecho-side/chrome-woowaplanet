import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  /* width: 713px;
  height: auto; */
`;

export const UpLayer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 1;
`;

export const DownLayer = styled.div`
  position: absolute;
  top: 105px;
  left: 0;
  z-index: 3;
`;

export const BodyLayer = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  z-index: 2;
`;
