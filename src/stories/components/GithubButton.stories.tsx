import type { Meta, StoryObj } from "@storybook/react-vite";
import GithubButton from "../../components/IconButton/GithubButton/GithubButton";

const meta = {
  title: "Components/Button/Github",
  component: GithubButton,
} satisfies Meta<typeof GithubButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
  },
};
