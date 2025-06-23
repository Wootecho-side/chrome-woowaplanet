import styled from "@emotion/styled";

export const ShopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Token = styled.p<{ isDarkMode?: boolean }>`
  font-weight: bold;
  color: ${({ isDarkMode = false }) =>
    isDarkMode ? "rgba(255, 255, 255)" : "rgba(0, 0, 0)"};
`;
