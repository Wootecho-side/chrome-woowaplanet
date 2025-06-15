import type { Meta, StoryObj } from '@storybook/react-vite';
import Satellite from '../../components/Satellite/Satellite';

const meta = {
  title: 'Components/Satellite',
  component: Satellite,
} satisfies Meta<typeof Satellite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 100,
    name: 'mechanic',
  },
};
