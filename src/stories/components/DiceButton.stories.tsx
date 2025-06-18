import type { Meta, StoryObj } from "@storybook/react-vite";
import DiceButton from "../../components/IconButton/DiceButton/DiceButton";

const meta = {
  title: "Components/Button/Dice",
  component: DiceButton,
} satisfies Meta<typeof DiceButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
  },
};
