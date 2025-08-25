import { useState } from "react";
import { Modal } from "./Modal";
import * as S from "./BookmarkModal.styles";
import { useStorageContext } from "../../contexts/StorageContext/useStorageContext";
import { ICON_OPTIONS } from "../../constants/config";

interface BookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const isValidUrl = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export default function BookmarkModal({ isOpen, onClose }: BookmarkModalProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("home");

  const { addBookmark } = useStorageContext();

  const handleSubmit = () => {
    if (!title) return alert("북마크의 이름을 작성해주세요.");
    if (!url) return alert("북마크의 URL을 작성해주세요.");
    if (!isValidUrl(url)) return alert("유효한 URL을 입력해주세요.");

    addBookmark({ id: Date.now(), title, name: selectedIcon, url });
    resetModalValues();
    onClose();
  };

  const resetModalValues = () => {
    setTitle("");
    setUrl("");
    setSelectedIcon("home");
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
        <S.IconGrid>
          {ICON_OPTIONS.map((icon) => (
            <S.IconOption
              key={icon.name}
              isSelected={selectedIcon === icon.name}
              onClick={() => setSelectedIcon(icon.name)}
            >
              <img src={icon.src} alt={icon.name} width={24} height={24} />
            </S.IconOption>
          ))}
        </S.IconGrid>
        <S.DetailDescription>
          🗑️ 추가한 북마크는 <span>우클릭을 눌러 삭제</span>할 수 있습니다.
        </S.DetailDescription>
      </Modal.Body>
      <Modal.Footer>
        <S.Button onClick={handleSubmit}>
          <p>북마크 추가</p>
        </S.Button>
      </Modal.Footer>
    </Modal>
  );
}
