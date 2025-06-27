import type { Meta, StoryObj } from "@storybook/react-vite";
import EyeMoving from "../../components/EyeMoving/EyeMoving";

const meta: Meta<typeof EyeMoving> = {
  title: "Components/EyeMoving",
  component: EyeMoving,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 500,
    innerSafeSize: 200,
    maxMovingValue: 10,
    showRecognitionZone: true,
    children: <div>⭐ ⭐</div>,
  },
};
