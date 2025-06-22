import type { Meta, StoryObj } from "@storybook/react-vite";
import Inventory from "../../components/Inventory/Inventory";

const meta = {
  title: "Components/Inventory/Inventory",
  component: Inventory,
} satisfies Meta<typeof Inventory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ["autodocs"],
  args: {
    inventory: [
      { id: 1, name: "tomato", rank: "rare", icon: "🍅" },
      { id: 2, name: "earth", rank: "normal", icon: "🌍" },
      { id: 3, name: "flamingo", rank: "rare", icon: "🦩" },
    ],
    selected: 1,
    setSelected: () => {},
  },
  render: (args, { updateArgs }) => {
    const handleSelect = (id: number) => {
      updateArgs({ selected: id });
    };
    return (
      <Inventory
        inventory={args.inventory}
        selected={args.selected}
        setSelected={handleSelect}
      />
    );
  },
};
