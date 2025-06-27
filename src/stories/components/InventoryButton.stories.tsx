import type { Meta, StoryObj } from "@storybook/react-vite";
import InventoryButton from "../../components/IconButton/InventoryButton/InventoryButton";

const meta = {
  title: "Components/Button/Inventory",
  component: InventoryButton,
} satisfies Meta<typeof InventoryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
    name: "inventory",
    isDarkMode: false,
    isClicked: false,
  },
};
