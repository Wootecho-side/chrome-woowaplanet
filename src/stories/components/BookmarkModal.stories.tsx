import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import BookmarkModal from "../../components/Modal/BookmarkModal";

const meta: Meta<typeof BookmarkModal> = {
  title: "Components/BookmarkModal",
  component: BookmarkModal,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BookmarkModal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [bookmarks] = useState<{ title: string; url: string }[]>([]);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>+ 북마크 추가</button>

        <BookmarkModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <ul style={{ marginTop: "1rem" }}>
          {bookmarks.map((bm, index) => (
            <li key={index}>
              <a href={bm.url} target="_blank" rel="noopener noreferrer">
                {bm.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};
