import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import styled from "@emotion/styled";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Button = styled.button`
  background-color: #4e7eff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
`;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <Modal isOpen={isOpen}>
          <Modal.CloseButton onClose={() => setIsOpen(false)} />
          <Modal.Header>🎪 예시 모달</Modal.Header>
          <Modal.Body>안녕하세용 예시입니다 !</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
