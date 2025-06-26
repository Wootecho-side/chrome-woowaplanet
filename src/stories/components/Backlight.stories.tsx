import type { Meta, StoryObj } from "@storybook/react-vite";
import Backlight from "../../components/Backlight/Backlight";

const meta = {
  title: "Components/Backlight",
  component: Backlight,
} satisfies Meta<typeof Backlight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
    color: "#fff",
    zIndex: 0,
  },
};
