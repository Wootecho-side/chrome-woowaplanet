import type { Meta, StoryObj } from "@storybook/react-vite";
import BookmarkButton from "../../components/IconButton/BookmarkButton/BookmarkButton";

const meta = {
  title: "Components/Button/Bookmark",
  component: BookmarkButton,
} satisfies Meta<typeof BookmarkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
    isDarkMode: false,
    isClicked: false,
  },
};
