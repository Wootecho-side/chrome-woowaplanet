import type { Meta, StoryObj } from "@storybook/react-vite";
import Planet from "../../components/Planet/Planet";

const meta: Meta<typeof Planet> = {
  title: "Components/Planet",
  component: Planet,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Planet>;

export const Default: Story = {
  render: () => <Planet />,
};
