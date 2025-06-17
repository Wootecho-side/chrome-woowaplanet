import type { Meta, StoryObj } from '@storybook/react-vite';
import IconButton from '../../components/IconButton/IconButton';

const meta = {
  title: 'Components/Button/Icon',
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
