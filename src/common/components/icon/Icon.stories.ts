import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/common/components/icon/Icon';

const meta = {
  title: 'Common/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: ['user', 'star', 'history', 'calendar', 'prev', 'next'],
    },
  },
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'user',
  },
};
