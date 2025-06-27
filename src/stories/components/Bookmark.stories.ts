import type { Meta, StoryObj } from "@storybook/react-vite";
import Bookmark from "../../components/Bookmark/Bookmark";
import { BookmarkList } from "../../data/BookmarkList";

const meta: Meta<typeof Bookmark> = {
  title: "Components/Bookmark/Bookmark",
  component: Bookmark,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Bookmark>;

export const Default: Story = {
  args: {
    bookmarkList: BookmarkList,
  },
};
