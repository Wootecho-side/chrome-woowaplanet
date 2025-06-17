import type { Meta, StoryObj } from '@storybook/react-vite';
import DiceButton from '../../components/IconButton/DiceButton/diceButton';

const meta = {
  title: 'Components/DiceButton',
  component: DiceButton,
} satisfies Meta<typeof DiceButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
  },
};
