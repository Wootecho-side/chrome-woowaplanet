import type { Meta, StoryObj } from '@storybook/react-vite';
import IconButton from '../../components/IconButton/IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
    name: 'dice',
  },
};

export const Dice: Story = {
  args: {
    size: 50,
    name: 'dice',
    disabled: false,
    whileHover: { opacity: 0.6, rotate: '5deg' },
    whileTap: {
      rotate: ['0deg', '-15deg', '0deg'],
      transition: { duration: 0.2 },
    },
  },
};

export const Inventory: Story = {
  args: {
    size: 50,
    name: 'inventory',
  },
};
