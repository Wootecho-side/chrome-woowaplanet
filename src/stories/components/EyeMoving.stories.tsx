import type { Meta, StoryObj } from "@storybook/react-vite";
import EyeMoving from "../../components/EyeMoving/EyeMoving";

const meta = {
  title: "Components/EyeMoving",
  component: EyeMoving,
} satisfies Meta<typeof EyeMoving>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
