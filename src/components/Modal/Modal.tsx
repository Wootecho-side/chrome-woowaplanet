import { AnimatePresence } from "framer-motion";

import * as S from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

interface ModalSubComponentProps {
  children: React.ReactNode;
}

interface ModalCloseButtonProps {
  onClose: () => void;
}

export function Modal({ isOpen, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <S.Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <S.Container
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </S.Container>
        </S.Overlay>
      )}
    </AnimatePresence>
  );
}

Modal.Header = function ModalHeader({ children }: ModalSubComponentProps) {
  return <S.Header>{children}</S.Header>;
};

Modal.Body = function ModalBody({ children }: ModalSubComponentProps) {
  return <S.Body>{children}</S.Body>;
};

Modal.Footer = function ModalFooter({ children }: ModalSubComponentProps) {
  return <S.Footer>{children}</S.Footer>;
};

Modal.CloseButton = function ModalCloseButton({
  onClose,
}: ModalCloseButtonProps) {
  return <S.CloseButtonStyled onClick={onClose}>×</S.CloseButtonStyled>;
};
