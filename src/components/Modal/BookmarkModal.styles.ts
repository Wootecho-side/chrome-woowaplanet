import styled from "@emotion/styled";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

export const Input = styled.input`
  padding: 12px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  color: black;
  padding: 12px 16px;
  border-radius: 6px;
  border: 2px solid #e3e3e3;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f0f0f0;
    border: 2px solid #333;
    transition: 0.2s;
  }
`;

export const IconGrid = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
  justify-content: center;
`;

export const IconOption = styled.button<{ isSelected: boolean }>`
  font-size: 24px;
  padding: 8px 10px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#333" : "#ccc")};
  background-color: ${({ isSelected }) =>
    isSelected ? "#f0f0f0" : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #666;
  }
`;
