import { useState } from "react";
import { Modal } from "./Modal";
import * as S from "./BookmarkModal.styles";
import { useStorageContext } from "../../contexts/StorageContext/useStorageContext";

interface BookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookmarkModal({ isOpen, onClose }: BookmarkModalProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const { addBookmark } = useStorageContext();

  const handleSubmit = () => {
    if (!title || !url) return alert("입력값을 모두 채워주셔야 합니다.");
    addBookmark({ id: Date.now(), title, name: title, url });
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.CloseButton onClose={onClose} />
      <Modal.Header>🔖 북마크 추가</Modal.Header>
      <Modal.Body>
        <S.Field>
          <S.Label>Title</S.Label>
          <S.Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="북마크 이름"
          />
        </S.Field>
        <S.Field>
          <S.Label>URL</S.Label>
          <S.Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />
        </S.Field>
      </Modal.Body>
      <Modal.Footer>
        <S.Button onClick={handleSubmit}>Add</S.Button>
      </Modal.Footer>
    </Modal>
  );
}
